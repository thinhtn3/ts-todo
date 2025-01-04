import UserModel from "../models/user.model";
import jwt from "jsonwebtoken";
import { oneMonthFromNow } from "../utils/expiration";
import SessionModel from "../models/session.model";
import { JWT_SECRET } from "../constants/env";
import { hashPassword, checkPassword } from "../utils/hashPassword";

interface AccountParams {
    email: string;
    password: string;
}

export const createAccount = async (user: AccountParams) => {
    // check if email is in database
    const existingUser = await UserModel.findOne({ email: user.email });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await hashPassword(user.password);

    const newUser = await UserModel.create({
        email: user.email,
        password: hashedPassword
    });

    const session = await SessionModel.create({
        userId: newUser._id,
    });

    const accessToken = jwt.sign({
        userId: newUser._id,
        sessionId: session._id
    }, JWT_SECRET)

    return {
        user: newUser,
        accessToken: accessToken
    }
}

export const loginAccount = async (user: AccountParams) => {
    const existingUser = await UserModel.findOne({ email: user.email });
    if (!existingUser) {
        throw new Error("User does not exist");
    }
    const validPassword = await checkPassword(user.password, existingUser.password);
    if (!validPassword) {
        throw new Error("Invalid password");
    }
    const session = await SessionModel.create({
        userId: existingUser._id,
    });

    const accessToken = jwt.sign({
        userId: existingUser._id,
        sessionId: session._id
    }, JWT_SECRET)

    return {
        user: existingUser,
        accessToken: accessToken
    }
}