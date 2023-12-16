const Sequelize = require("sequelize");

const sequelize = require("../database/database");

const User = sequelize.define("Users",{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = User;
