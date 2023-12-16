const Sequelize = require("sequelize");

const sequelize = require("../database/database");

const User = sequelize.define({
  id: {
    typ: Sequelize.INTEGER,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = User