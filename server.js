import express from 'express';
import dotenv from 'dotenv';

const app=express();
dotenv.config({debug:true});
app.get("/",(req,res,next)=>{
    res.send("welcome to express js");
})



app.listen(process.env.PORT,()=>{
    console.log(`server is listening at port ${process.env.PORT}`);
})