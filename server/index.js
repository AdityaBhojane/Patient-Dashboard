import express from 'express';
import cors from 'cors';
import { connectDB } from './config/dbConfig.js';
import userRouter from './routes/userRouter.js';
import shipmentRouter from './routes/shipmentRouter.js';
import { Medication } from "./model/medication.js";

const app = express();

app.use(cors({
    origin:"*"
}));

app.use(express.json());

app.use("/api/v1",userRouter);
app.use("/api/v1",shipmentRouter);

app.get("/ping",(req,res)=>{
    res.json({
        message:"pong"
    })
});


app.listen(3000,async ()=>{
    await connectDB()
    console.log("server is running on port 3000")
})