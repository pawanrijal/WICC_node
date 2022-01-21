/**
 Author: Santosh Kumar Subedi
 CreatedOn: 2022-01-20
 FileName:index.js
 Project: example1
 **/

const express = require("express");

const app = express();
// const unProtectedRoutes = ['/v1/login']
const firstMiddleware = (req,res,next)=>{
    console.log("this is my first middleware")
    next();
}

const authMiddleware = (req,res,next)=> {
    next(new Error("authentication failed"))
    //     console.log("this is my second middleware")
    //     next();
}

const errorHandler = (err,req,res,next)=>{
    console.error("this is error handler")
    res.json({message:err.message}).status(500);
}

app.use(authMiddleware);
app.use(firstMiddleware);

app.get("/",(req,res,next)=>{

    res.send("call for get function");
});

app.post("/",(req,res)=>{
    res.send("call for post function");
});

app.use(errorHandler)

app.listen(9001,()=>{
    console.log("server running in port 9001")
})
