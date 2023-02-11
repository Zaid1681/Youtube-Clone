import mongoose from "mongoose";
const { Schema } = mongoose
const CommentSchema = new Schema({
    userId: {
        type: String,
        require: true
    },
    videoId:{
        type : String,
        requrie: true
    },
    desc: {
        type : String,
        reqruied :true
    }
}, { timestamps: true }

)
export default mongoose.model("Comment", CommentSchema)

/*
routes used to save data into the mongo
CRUD operation in ==> controller
*/










