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
      console.log(
        "products-cart-item.dataValues.qty =>",
        product["cart-item"].dataValues.qty
      );
      if (product) {
        const oldQty = product["cart-item"].dataValues.qty;
        newQty += oldQty;
        return product;
      }
      return Product.findByPk(id);
    })
    .then((product) => {
      return fetchCart.addProduct(product, {
        through: { qty: newQty },
      });
    })
    .then(() => {
      res.redirect("/cart");
    });
};

exports.getCart = (req, res) => {
  req.user
    .getCart()
    .then((cart) => {
      return cart
        .getProducts({
          include: [
            {
              model: CartItem,
              as: "cart-item",
              attributes: ["qty"],
            },
          ],
        })
        .then((products) => {
          const productsWithCartItem = products.map((product) => {
            product.CartItem = product["cart-item"].dataValues;
            return product;
          });
          res.render("shop/cart", {
            title: "cart",
            path: req.path,
            products: productsWithCartItem,
          });
        });
    })
    .catch((err) => console.log(err));
};
