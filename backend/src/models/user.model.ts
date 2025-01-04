import mongoose from "mongoose";

interface User {
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema<User>({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;