const Sequelize = require("sequelize")

const sequelize = require('../database/database')

const CartItem = sequelize.define("cart-item", {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    qty:Sequelize.INTEGER,
})
module.exports = CartItem