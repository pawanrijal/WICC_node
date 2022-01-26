const express = require('express');
const bodyParser=require('body-parser')

const app = express()
const { sequelize } = require("./lib/database-connection");
const { initRoutes } = require("./routes");
const HttpException=require('../exceptions/http-exception')

app.use(bodyParser.json())
sequelize
  .authenticate()
  .then(() => {
    // sequelize.sync({ alter: true });
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });
initRoutes(app);
app.get('/test',(req,res)=>{
    res.send({"test":"passed"})
}
)

app.use((req, res, next)=>{
  const err = new HttpException(404,"Page not Found")
  next(err)

})

app.use((err, req, res, next)=>{
  err.statusCode = err.statusCode || 500;
  err.success = err.success || false;
  err.message = err.message || "Something went wrong";
  err.status = err.status || "error"
  res.json({
    "error": err.message,
    "statusCode": err.statusCode,
    "success": err.success
  })
  
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})


