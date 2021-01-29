var fs = require ('fs')
let {validationResult} = require('express-validator')
var userData = require('../data/users')
var bcryptjs = require('bcryptjs')
let db = require('../database/models')

module.exports = {

    create: function (req,res){
        res.render('./auth/register'/*,{
            linkToLogin:false, title: 'Rmarket | Registrate',ruta: 'users', stylesheet: 'register'
        }*/)},
    
    
    store: function (req,res){
        let errors = validationResult(req)

        if(errors.isEmpty()){

        db.Usuario.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            category:req.body.category,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password)            
                
            })
                
            res.redirect('/')
            
        }

        console.log(errors.mapped())

        return res.render('./auth/register',{
            errors:errors.mapped(),
            linkToLogin: true,title: 'Rmarket | Registrate',ruta: 'users', stylesheet: 'register'
        
        })
    
    
   

},

login: function(req,res){
    res.render('./auth/login', {title: 'Rmarket | Ingresá a tu cuenta',ruta: 'users', stylesheet: 'login'})
},

processLogin: function(req,res){
let user = userData.findByEmail(req.body.email)

if(!user){
    return res.send('Email incorrecto')
}else if(bcryptjs.compareSync(req.body.password, user.password)){
    req.session.user = user.email

    if(req.body.recordame){
        res.cookie('recordame',user.email,{maxAge:120 * 1000})
    }

    return res.redirect('/')
} else {
    return res.send('Password incorrecto')
}


},

finalLogin: function(req,res){
    
res.render('auth/user-info', {title: 'Rmarket | Bienvenid@'+ ' '+ user.email, ruta: 'users', stylesheet: 'user-info'})

},


logout: function(req,res){

    req.session.destroy()
    res.cookie('recordame', null, {maxAge: 0})
    return res.redirect('/')
 }

}







