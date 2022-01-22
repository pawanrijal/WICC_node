/**
 Author: Santosh Kumar Subedi
 CreatedOn: 2022-01-20
 FileName:index.js
 Project: example1
 **/

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// app.use(bodyParser.json())
// const unProtectedRoutes = ['/v1/login']
app.use(express.json())
const dataSource = [{
    id:1,
    name:"one"
},{
    id:2,
    name:2
}]
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

// app.use(authMiddleware);
app.use(firstMiddleware);

app.get("/get",(req,res,next)=>{


    res.json(dataSource);
});

app.get("/get/query",(req,res)=>{
    const {id} = req.query;
    const data = dataSource.filter(d=>d.id==id);
    res.json(data)
})

app.get("/get/:id",(req,res)=>{
    const {id} = req.params;
    const data = dataSource.filter(d=>d.id==id);
    res.json(data)
})



app.post("/",(req,res)=>{
    const data = req.body;
    console.log(data)
    res.send("call for post function");
});

app.use(errorHandler)

app.listen(9001,()=>{
    console.log("server running in port 9001")
})
