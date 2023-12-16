const express = require('express')
const route =express.Router()
const indexControllers = require("../controllers/index")

route.get('/',indexControllers.getHome)

module.exports = route