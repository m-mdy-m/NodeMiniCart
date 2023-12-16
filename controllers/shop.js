const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {
  res.render("shop/add-product", { title: "Add Product", path: req.path });
};
