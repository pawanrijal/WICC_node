const new_Users = require("./new_Users");

module.exports = (sequelize, type) => {
  sequelize.define(
    "posts",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: type.STRING(100),
      },
      user_id: {
        field: "user_id",
        type: type.INTEGER,
        references: {
          model: new_Users,
        },
      },
      image: {
        type: type.STRING,
      },
    },
    {
      timestamps: true,
    }
  );
};
