const Product = require("../models/products")
exports.getHome = (req,res,next)=>{
    Product.findAll().then(products =>{
        console.log('prod => ', products);
        console.log('prodsssss => ', products[0]);
        res.render('index', {
            title : 'HOME',
            path : req.path,
            products : products
        })
    })
    
}