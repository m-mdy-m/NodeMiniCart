exports.getHome = (req,res,next)=>{
    res.render('index', {
        title : 'HOME',
        path : req.path,
    })
}