const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", { pageTitle: "Add Product", path: req.path });
};
