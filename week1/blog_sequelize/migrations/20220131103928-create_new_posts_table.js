"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let type = Sequelize.DataTypes;
    await queryInterface.createTable(
      "posts",
      {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: type.STRING,
          allowNull: false,
        },
        userId: {
          field: "user_id",
          type: type.INTEGER,
          references: {
            model: "new_Users",
            key: "id",
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
  },
};
