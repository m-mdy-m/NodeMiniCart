const Products = require("../models/products");

exports.getAdmin = (req, res, next) => {
  Products.findAll()
    .then((products) => {
      res.render("admin/dashboard", {
        title: "dashboard",
        path: req.path,
        products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
