import express from "express";
const router = express.Router();
import { getUser, deleteUser, updateUser, subUser, likeUser, unsubUser, dislikeUser } from "../Controllers/user.js"
import { verifyToken  } from "../middleware/verifyToken.js"

//update a user
router.put("/:id",verifyToken, updateUser)


//delete a user
router.delete("/:id", verifyToken, deleteUser)

//get a user
router.get("/find/:id", getUser)

//subscribe  a user
router.put("/sub/:id", verifyToken, subUser)

//like a user
router.put("/like/:id", verifyToken,likeUser)

//dislilke a user
router.put("/dislike/:id",verifyToken, dislikeUser)


export default router