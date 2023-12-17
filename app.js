// Require the necessary packages
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const casual = require("casual");
const sequelize = require("./database/database");
const Product = require("./models/products.js");
const User = require("./models/users.js");
const Cart = require("./models/cart.js");
const CartItem = require("./models/cart-item.js");
const indexRoute = require("./routes/index");
const shopRoute = require("./routes/shop");
const adminRoute = require("./routes/admin");
// Create an express app

// Middleware for parsing incoming requests with URL-encoded payloads
app.use(bodyParser.urlencoded({ extended: false }));
// Set the view engine to ejs and the views directory
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(async (req, res, next) => {
  try {
    const user = await User.findByPk(1); 
    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred on the server");
  }
});
app.use(indexRoute);
app.use(shopRoute);
app.use(adminRoute);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
const startServer = async () => {
  try {
    await sequelize.sync();
    // await sequelize.sync({force : true})
    let user = await User.findByPk(1);
    if (!user) {
      user = await User.create({ name: casual.name, email: casual.email });
    }
    await user.createCart();
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
