const Product = require("../models/products");
exports.getHome = async (req, res, next) => {
  const products = await Product.findAll();
  res.render("index", {
    title: "HOME",
    path: req.path,
    products: products,
  });
};
