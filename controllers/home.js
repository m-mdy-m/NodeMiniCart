exports.getHome = (req,res,next)=>{
    res.render('home', {
        title : 'HOME',
        path : req.path,
    })
}