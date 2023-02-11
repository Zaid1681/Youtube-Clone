import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();
const connect = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect('mongodb://localhost:27017/youtube', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("connected to DB sucessfully!!");
        })
        .catch((error) => {
            console.log("Error: ", error);
        })
}
mongoose.connection.on("disconnected", () => {
    console.log("Mongodb disconnected");
})
mongoose.connection.on("connected", () => {
    console.log("Mongodb connected");
})
export default connect; 