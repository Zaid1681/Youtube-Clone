import { createError } from "../error.js"
import Video from "../Schema/Video.js"
import User from "../Schema/User.js"
//creatinf user video 
export const addVideo = async (req, res, next) => {
    try {
        const video = await new Video({ userId: req.user.id, ...req.body })
        await video.save();
        res.status(200).json("video uploaded sucesfully")
    }
    catch (error) {
        next(error)

    }
}

//updating user video 
export const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) res.status(400).json("Video not found")
        if (req.params.id === video.userId) {
            try {
                const updatedVideo = await Video.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
                res.status(200).json(updatedVideo);

            } catch (error) {
                next(error)

            }
        }
        else {
            next(createError(404, "You cannot update your video!!s"))
        }

    } catch (error) {
        next(error);

    }
}


//DELETE Video 
export const deleteVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) next(400, "Video not found!!")
        if (req.params.id === video.userId) {
            try {
                await Video.findByIdAndDelete(req.params.id,)
                res.status(200).json("Video deleted Sucessfully!!");
            } catch (error) {
                next(error)
            }
        }
        else {
            next(createError(404, "You cannot update your video!!s"))
        }
    } catch (error) {
        next(error);

    }
}


//GET video 
export const getVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) next(createError(404, "Video not found"))
        else {
            res.status(200).json(video)
        }
    } catch (error) {
        next(error);
    }
}
//ADDVIEW 
export const addView = async (req, res, next) => {
    try {
        //It is getting id of a video to increase the number of views
        const video = await Video.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } })
        res.status(200).json("The views of video has incremented");
    } catch (error) {
        next(error);
    }
}
//RANDOM Video
export const randomVideo = async (req, res, next) => {
    //aggregate ==> displayed the rendom sample video without any consideration of id's
    try {
        const random = await Video.aggregate([{ $sample: { size: 10 } }])
        res.status(200).json(random)
        console.log("random videos has displayed");
    } catch (error) {
        next(error)

    }

}
// TREND videos
export const trendVideo = async (req, res, next) => {
    //   1 --> in decrement order
    //  -1 --> in increment order
    try {
        const trend = await Video.find().sort({ views: -1 }).limit(2)
        res.status(200).json(trend)
        console.log("The most trneded video according to the most viewed one has been displayed!!");
    } catch (error) {
        next(error);
    }
}
// SUBSCRIBED Videos ==> it will displayed the videos of suns channel
export const subVideo = async (req, res, next) => {
    try {
        const userData = await User.findById(req.user.id)
        const subChannels = userData.subscribedPerson

        //create a list of subscribed videos
        const list = await Promise.all(
            subChannels.map((channelId) => {
                return Video.find({ userId: channelId })

            })
        )
        res.status(200).json(list)
    } catch (error) {
        next(error);
    }
}

//Geting the tagged video
export const taggedVideo = async (req, res, next) => {
    try {
        const queryTag = req.query.tagged.split(",")
        console.log(queryTag);
        const tagged = await Video.find({ tags: { $in: queryTag } }).limit(2)
        res.status(200).send(tagged)
    } catch (error) {
        next(error);
    }
}

//searching the videos on the basis of the particular text in video title
export const searchTitle = async (req, res, next) => {
    try {
        const qtitle = req.query.qtitle
        console.log(qtitle);
        const queryTitle = await Video.find({ title: { $regex: qtitle, $options: "i" } }).limit(2).sort()
        res.status(200).send(queryTitle)
    } catch (error) {
        next(error);
    }
}

//delete video 
export const delVideo = async (req, res, next) => {
    try {
        const video = await Video.findByIdAndDelete(req.params.id)
        res.status(200).send("Video Deleted sucessfully")
    } catch (error) {
        next(error);
    }
}


/*
NOTE:==> getting the expression present in title of vidoe 
1. regex ==> will found any text/character containing the inputted string
2. option ==> will avoid the upper and lower solution
*/


