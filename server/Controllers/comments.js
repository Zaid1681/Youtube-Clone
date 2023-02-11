import Comment from "../Schema/Comment.js"
import Video from "../Schema/Video.js";
export const addComment = async (req, res, next) => {
    const comment = new Comment({ ...req.body, userId: req.user.id })
    try {
        comment.save();
        console.log("Comments added");
        res.status(200).json(comment)

    } catch (error) {
        next(error)
    }
}
export const deleteComment = async (req, res, next) => {
    //requested user will have its id in the parameter
    try {
        const comment = await Comment.findById(req.params.id)
        const video = await Video.findById(req.params.id)
        if (comment.userId === req.user.id || video.userId === req.user.id) {
            await Comment.findByIdAndDelete(req.params.id)
        }
        res.status(200).json("Comments got deleted sucessfully!!")
    } catch (error) {
        next(error)
    }
}
export const getComment = async (req, res, next) => {
    //finding will be done as by checking whether  the req.params.videoId and the videoId are equal and whether it contain the comments!!
    try {
        const getComments = await Comment.find({videoId: req.params.videoId})
        res.status(200).json(getComments)
        console.log("Comments displayed sucessfully!!");

    } catch (error) {
        next(error)
    }
}