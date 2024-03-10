import express from 'express';
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js"
import {config} from "dotenv";
import cookieParser from 'cookie-parser';
import {ErrorMiddleWare} from "./middlewares/error.js"
import cors from "cors";

export const app = express();

config({
    path:"./data/config.env",
});

//Using MiddleWare
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTENTD_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
})
);

// Using Routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks",taskRouter);

app.get("/", (req,res)=>{
    res.send("Nice Working");
});

//Using ErrorMiddleWare
app.use(ErrorMiddleWare);