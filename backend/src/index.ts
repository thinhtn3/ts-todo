import "dotenv/config";
import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler";
import { PORT } from "./constants/env";
import mongooseConnect from "./config/mongooseConnect";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    try {
        res.send("Hello World");

    } catch (error) {
        console.log(error);
    }
})

app.use("/auth", authRoutes)

app.use(errorHandler);

app.listen(PORT, async() => {
    await mongooseConnect();
    console.log("Server is running on port", PORT);
});