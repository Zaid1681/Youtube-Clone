import mongoose from "mongoose";
const { Schema } = mongoose
const VideoSchema = new Schema({
    userId: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    imgurl: {
        type: String,
        require: true
    },
    desc: {
        type: String
    },
    videourl: {
        type: String,
        // default: 0
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    tags: {
        type: [String],
        default: []
    },
    likes: {
        type: [String],
        default: []
    },
    dislikes: {
        type: [String],
        default: []
    } 
}, { timestamps: true }

)
export default mongoose.model("Video", VideoSchema)












