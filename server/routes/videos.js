import  express  from "express";
const router = express.Router();
import { verifyToken } from "../middleware/verifyToken.js";
import { addVideo , addView, randomVideo, subVideo , trendVideo, updateVideo , taggedVideo , searchTitle , delVideo , getVideo} from "../Controllers/videos.js";

router.post("/add",verifyToken,addVideo)
router.get("/find/:id",getVideo)
router.delete("/:id",verifyToken,delVideo)
router.put("/:id",addView)
router.get("/ran",randomVideo)
router.get("/trend",trendVideo)
router.get("/sub",verifyToken,subVideo) //getting all the subscribed videos
router.get("/tags",taggedVideo) //getting all the tagged videos
router.get("/title",searchTitle) //getting all the query  videos


export default router