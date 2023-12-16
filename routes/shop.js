const express = require("express")
const routes = express.Router()
const shopControllers = require("../controllers/shop")
routes.get('/add-products', shopControllers.getAddProduct)
routes.post('/add-products' , shopControllers.postAddProduct)
module.exports = routes