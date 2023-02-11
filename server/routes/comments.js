import  express  from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { addComment , deleteComment , getComment } from "../Controllers/comments.js";

const router = express.Router();
router.post("/:id" , verifyToken , addComment)
router.delete("/:id" , verifyToken , deleteComment)
router.get("/find/:videoId" , verifyToken , getComment)
export default router