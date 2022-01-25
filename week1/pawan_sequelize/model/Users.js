
module.exports = (sequelize, type) => {
  return sequelize.define("users", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: type.STRING(100),
    },
    email: {
      type: type.STRING(50),
      allowNull: false,
      unique: true,
    },
    phone: {
      type: type.STRING(13),
      allowNull: false,
      unique: true,
    },
    username: {
      field: "username",
      type: type.STRING(20),
      allowNull: false,
      unique: true,
    },
  });
};