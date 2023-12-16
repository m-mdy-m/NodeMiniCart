const Product = require("../models/products")
exports.getHome = (req,res,next)=>{
    Product.findAll().then(products =>{
        res.render('index', {
            title : 'HOME',
            path : req.path,
            products
        })
    })
    
}