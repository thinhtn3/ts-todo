import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";

const mongooseConnect = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
};

export default mongooseConnect;