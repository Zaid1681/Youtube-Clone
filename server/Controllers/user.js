import { createError } from "../error.js"
import User from "../Schema/User.js"

export const getUser = async (req, res) => {
    //getting user details but only genuine user is able to see its detaisl i.e it must b uthenticated first
    try {
        const user = await User.findById(req.params.id)
        
        console.log("getting a user");
        res.status(200).json(user)
    }
    catch (error) {
        next(error)

    }
}
export const deleteUser = async (req, res) => {
    //delete user 
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findOneAndDelete(req.params.id,)
            res.status(200).json("User deleted Sucessfully")
        }
        catch (error) {
            next(createError(error))
        }
    }
    else {
        res.status(404).json("You are not authenticated to make changes")
    }

}

//UPDATE USER
export const updateUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findOneAndUpdate(req.params.id,
                { $set: req.body, },
                { new: true },
            )
            res.status(200).json(updatedUser)
        }
        catch (error) {
            next(createError(error))
        }
    }
    else {
        res.status(404).json("You are not authenticated to make updates")
    }

}
export const subUser = async (req, res , next) => {
    //authenticated user can subscribed any other user
    // req.userid ===> my id  and req.params.id ==> samne wale ki id
   try {
    try {
        const user = await User.findByIdAndUpdate(req.user.id, {
            $push: { subscribedPerson: req.params.id }
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc : { subscribers: 1 }
        })
        res.status(200).json("chanel subscribed sucessfully!!")

    } catch (error) {
        next(error)
    }
    
   } catch (error) {
    next(error)

   }

}
export const unsubUser = async (req, res) => {
    //authenticated user can subscribed any other user
    try {
        const user = await User.findById(req.user.id, {
            $pull: { subscribedPerson: req.params.id }
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc : { subscribers: -1 }
        })

    } catch (error) {
        next(error)
    }

}
export const likeUser = async (req, res) => {
    //authenticated user can subscribed any other user

}
export const dislikeUser = async (req, res) => {
    //authenticated user can subscribed any other user
}