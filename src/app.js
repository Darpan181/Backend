import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))


app.use(express.json({limit: "16kb"})); // for accepting json 
app.use(express.urlencoded({extended: true, limit: "16kb"})); // for accepting url`s
app.use(express.static("public")); // in public folder accepting images or files
app.use(express.cookieParser()) // for accepting cookies 

export { app };