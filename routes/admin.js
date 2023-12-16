const express = require("express");
const route = express.Router();
const adminControllers = require("../controllers/admin");
route.get("/admin/dashboard", adminControllers.getAdmin);

route.get("/edit-products/:prodsId", adminControllers.getEdit);
route.post("/edit-products", adminControllers.editProducts);


route.post('/admin/dashboard/:prodsId', adminControllers.delete)
module.exports = route;
