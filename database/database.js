const Sequelize = require('sequelize')

const sequelize = new Sequelize('node_learning','root','mdy_mmshly1383922',{
    host : 'localhost',
    dialect : 'mysql'
})
module.exports = sequelize