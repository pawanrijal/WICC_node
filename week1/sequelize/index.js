const express = require("express");
const {initRoutes} = require('./routes')
const app = express();
app.use(express.json())
const {sequelize,secondDatabase} = require("./lib/DatabaseConnection");
     sequelize.authenticate().then(()=>{
         // sequelize.sync({alter:true})
         console.log("Database connected successfully")
         }
     ).catch(err=>{
         console.log(err.message)
     });
// secondDatabase.authenticate().then(()=>{
//         // sequelize.sync({alter:true})
//         console.log("Second Database connected successfully")
//     }
// ).catch(err=>{
//     console.log(err.message)
// })
initRoutes(app);
app.get("/get",(req,res,next)=>{


    res.json({message:"test Message"});
});

app.listen(9001,()=>{
    console.log("server running in port 9001")
})