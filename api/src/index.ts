import express from "express";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes";

dotenv.config();
const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(4000, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${4000}`);
});