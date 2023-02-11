import mongoose from "mongoose";
const {Schema} = mongoose

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    imgUrl: {
        type: String
    },
    subscribers: {
        type: Number,
        default: 0
    },
    subscribedPerson: {
        type: [String]
    }
}, { timestamps: true }

)
export default mongoose.model("user", UserSchema)












