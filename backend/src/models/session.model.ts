import mongoose from "mongoose";
import { oneMonthFromNow } from "../utils/expiration";

interface Session {
    userId: string;
    token: string;
    createdAt: Date;
    expiresAt: Date;
}

const sessionSchema = new mongoose.Schema<Session>({
    userId: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    expiresAt: {
        type: Date,
        required: true,
        default: oneMonthFromNow,
    },
});

const SessionModel = mongoose.model<Session>("Session", sessionSchema);
export default SessionModel