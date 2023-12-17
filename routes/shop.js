const express = require("express")
const routes = express.Router()
const shopControllers = require("../controllers/shop")
routes.get('/add-products', shopControllers.getAddProduct)
routes.post('/add-products' , shopControllers.postAddProduct)
routes.get('/cart', shopControllers.getCart)
routes.post('/cart', shopControllers.postCart)
module.exports = routes