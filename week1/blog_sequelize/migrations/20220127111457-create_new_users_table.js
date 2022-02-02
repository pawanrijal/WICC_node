"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const type = Sequelize.DataTypes;

    await queryInterface.createTable("new_users", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: type.STRING(100),
        unique: true,
        allowNull: false,
      },
      password: {
        type: type.STRING(200),
        allowNull: false,
      },
    });
  },
};
