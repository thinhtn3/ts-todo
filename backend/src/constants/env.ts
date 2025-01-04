import { get } from "http";

const getEnv = (key: string) => {
    if (!process.env[key]) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return process.env[key];
};

export const MONGO_USERNAME = getEnv("MONGO_USERNAME");
export const MONGO_PASSWORD = getEnv("MONGO_PASSWORD");
export const MONGO_URI = getEnv("MONGO_URI");
export const PORT = getEnv("PORT");
export const JWT_SECRET = getEnv("JWT_SECRET");
export const JWT_REFRESH_SECRET = getEnv("JWT_REFRESH_SECRET");