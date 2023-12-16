const express = require('express')
const route = express.Router()
const adminControllers = require("../controllers/admin")
route.get('/dashboard', adminControllers.getAdmin)

module.exports = route