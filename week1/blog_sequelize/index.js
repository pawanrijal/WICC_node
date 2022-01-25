const express = require('express');
const bodyParser=require('body-parser')

const app = express()
const { sequelize } = require("./lib/database-connection");
const { initRoutes } = require("./routes");

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


app.listen(3000, () => {
    console.log("Listening on port 3000")
})