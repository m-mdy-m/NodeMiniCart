const CartItem = require("../models/cart-item");
const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {
  res.render("shop/add-product", {
    title: "Add Product",
    path: req.path,
    editing: false,
  });
};
exports.postAddProduct = async (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  try {
    const user = await req.user;
    await user.createProduct({ title, price });
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

exports.postCart = async (req, res) => {
  let newQty = 1;
  const id = req.body.prodsId;

  try {
    const cart = await req.user.getCart();
    const products = await cart.getProducts({ where: { id: id } });

    let product;
    if (products.length > 0) {
      product = products[0];
      newQty = product["cart-item"].qty + 1;
      await product["cart-item"].update({ qty: newQty });
    } else {
      product = await Product.findByPk(id);
      if (!product) {
        throw new Error("Product not found.");
      }
      await cart.addProduct(product, { through: { qty: newQty } });
    }

    console.log("Redirecting to /cart");
    res.redirect("/cart");
  } catch (err) {
    console.log("Error in postCart:", err);
    res.status(500).send("Unable to add product to cart.");
  }
};

exports.getCart = async (req, res) => {
  try {
    const getCart = await req.user.getCart();
    const products = await getCart.getProducts({
      include: [
        {
          model: CartItem,
          as: "cart-item",
          attributes: ["qty"],
        },
      ],
    });

    const cartItem = await products.map((product)=>{
      product.CartItem = product['cart-item'].dataValues;
      return product
    })
    res.render("shop/cart", {
      title: "cart",
      path: req.path,
      products: cartItem,
    });
  } catch (err) {
    console.log(err);
  }

};
