import catchError from "../utils/catchError";
import { z } from "zod";
import { createAccount, loginAccount } from "../service/auth.service";

const registerSchema = z.object({
    email: z.string().email().min(1),
    password: z.string().min(1),
});

export const registerController = catchError(async (req, res) => {
    const { user, accessToken } = await createAccount(registerSchema.parse(req.body));
    res.status(201).json({ user });
})

export const loginController = catchError(async (req, res) => {
    const { user, accessToken } = await loginAccount(registerSchema.parse(req.body));
    res.status(201).json({ user });
})