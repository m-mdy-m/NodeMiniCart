const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Product = sequelize.define("Product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title : {
    type:Sequelize.STRING,
    allowNull:false,
  },
  price : {
    type : Sequelize.INTEGER,
    allowNull:false,
  }
});
module.exports = Product