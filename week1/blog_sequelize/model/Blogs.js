module.exports = (sequelize, type) => {
  return sequelize.define("blogs", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: type.STRING(100),
    },
    body: {
      type: type.STRING(200),
      allowNull: false,
      unique: true,
    },
    category: {
      type: type.STRING(20),
      allowNull: false,
      unique: true,
    },
    author: {
      field: "author",
      type: type.STRING(20),
      allowNull: false,
      
    },
  });
};
