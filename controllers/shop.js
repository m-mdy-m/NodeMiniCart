const CartItem = require("../models/cart-item");
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
  req.user
    .createProduct({
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

exports.postCart = (req, res) => {
  let newQty = 1;
  const id = req.body.prodsId;
  let fetchCart;
  req.user
    .getCart()
    .then((cart) => {
      fetchCart = cart;
      return cart.getProducts({ WHERE: { id: id } });
    })
    .then((pro) => {
      let product;
      if (pro.length > 0) {
        product = pro[0];
      }
      if (product) {
        console.log("cart-item =>", CartItem);
        const oldQty = product.CartItem.qty;
        console.log("old =>", oldQty);
        newQty = oldQty + 1;
        return product;
      }
      return fetchCart.addProduct(product, {
        through: { qty: newQty },
      });
      return Product.findByPk(id)
        .then((data) => {
          return fetchCart.addProduct(pro, { through: { qty: newQty } });
        })
        .then(() => {
          res.redirect("/cart");
        });
    });
};

exports.getCart = (req, res) => {
  req.user.getCart().then((cart) => {
    return cart.getProducts((products) => {
      res.render("shop/cart", {
        title: "cart",
        path: req.path,
        products,
      });
    });
  });
};
