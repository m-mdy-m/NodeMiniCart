const Products = require("../models/products");

exports.getAdmin = (req, res, next) => {
  Products.findAll()
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
  Products.findByPk(prodsId).then(prods=>{
    res.render('shop/add-product', {
      title:"editUser",
      path:req.path,
      editing : editMode,
      prods
    })
  })
};
exports.editProducts = (req,res)=>{
  const body = req.body
  const prodsId = body.id;
  const title = body.title
  const price = body.price
  Products.findByPk(prodsId).then(pro =>{
    pro.title = title
    pro.price = price
    return pro.save()
  }).then(result =>{
    console.log('user edit');
    res.redirect('/')
  })
}
