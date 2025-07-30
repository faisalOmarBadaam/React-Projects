import express from "express";
import cors from "cors";
import blogRouter from "./route/Blog-route.js";
import "./db/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogRouter);
app.listen(5000, () => console.log("app is running at 5000..."));
