const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {
  res.render("shop/add-product", {
    title: "Add Product",
    path: req.path,
    editing: false,
  });
};
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const user = req.user
  console.log('user =>', user);
  Product.create({
    title,
    price,
  })
    .then((result) => {
      console.log("users created");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
