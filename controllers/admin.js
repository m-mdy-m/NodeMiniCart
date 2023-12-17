const Products = require("../models/products");

exports.getAdmin = async (req, res, next) => {
  const products = await req.user.getProducts();
  await res.render("admin/dashboard", {
    title: "dashboard",
    path: req.path,
    products,
  });
};

exports.getEdit = async (req, res) => {
  const editMode = req.query.edit;
  let prodsId = req.params.prodsId;
  if (!editMode) {
    return res.redirect("/");
  }
  try {
    const user = await req.user;
    console.log("user =>", user);
    const products = await user.getProducts({ WHERE: { id: prodsId } });
    const prods = await products[0];
    await res.render("shop/add-product", {
      title: "editUser",
      path: req.path,
      editing: editMode,
      prods,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.editProducts = async (req, res) => {
  const body = req.body;
  const id = body.id;
  const title = body.title;
  const price = body.price;
  try {
    const product = await Products.findByPk(id);
    product.title = title;
    product.price = price;
    await product.save();
    console.log("user edit");
    res.redirect("/");
  } catch (err) {
    res.redirect(err);
  }
};

exports.delete = async (req, res) => {
  const id = req.params.prodsId;
  const prods = await Products.findByPk(id);
  await prods.destroy();
  res.redirect("/admin/dashboard");
};
