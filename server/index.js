import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import userRoutes from "./routes/user.js"
// import authComments from "./routes/comments"
import authRoutes from "./routes/auth.js"
import connect from "./db.js"
import cookieParser from "cookie-parser"
import authVideos from "./routes/videos.js"
import authComments from "./routes/comments.js"

const app = express();
//middleware and routes
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });
app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
    })
  
app.use(cookieParser())
app.use(express.json())//this will allow our app to take any json file from outside 
app.use("/api/user" , userRoutes)
app.use("/api/auth" , authRoutes)
app.use("/api/videos" , authVideos)
app.use("/api/comments" , authComments)
app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "something went wrong";
    return res.status(status).json({
        success:false,
        status,
        message
    })
})   

app.listen(8800, () => {
    connect()
    console.log("Express server running!!");
})