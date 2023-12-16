const Products = require("../models/products");

exports.getAdmin = (req, res, next) => {
  req.user.getProducts()
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

exports.getEdit = (req, res) => {
  const editMode = req.query.edit;
  let prodsId = req.params.prodsId;
  if (!editMode) {
    return res.redirect("/");
  }
  req.user.getProducts({ WHERE: { id: prodsId } })
  .then((products) => {
    const prods = products[0];
    res.render("shop/add-product", {
      title: "editUser",
      path: req.path,
      editing: editMode,
      prods,
    });
  });
};
exports.editProducts = (req, res) => {
  const body = req.body;
  const prodsId = body.id;
  const title = body.title;
  const price = body.price;

  Products.findByPk(prodsId)
    .then((pro) => {
      pro.title = title;
      pro.price = price;
      return pro.save();
    })
    .then((result) => {
      console.log("user edit");
      res.redirect("/");
    });
};

exports.delete = (req, res) => {
  const id = req.params.prodsId;
  Products.findByPk(id)
    .then((prods) => {
      return prods.destroy();
    })
    .then((result) => {
      console.log("user delete");
      res.redirect("/admin/dashboard");
    });
};
