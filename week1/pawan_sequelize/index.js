const express = require("express");

const app = express();
app.use(express.json());
const { initRoutes } = require("./routes");
const { sequelize } = require("./lib/databaseConnection");

sequelize.authenticate().then(() => {
    //sequelize.sync({ alter: true });
    console.log("Database connected successfully");
  }).catch((err) => {
    console.log(err.message);
  });
initRoutes(app);
app.get("/hello", (req, res) => {
  res.json({"test":"Connected"});
});

app.listen(5000, () => {
  console.log("Server running");
});
