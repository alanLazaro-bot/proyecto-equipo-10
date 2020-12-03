var fs = require ('fs')
let {validationResult} = require('express-validator')
var userData = require('../data/users')
var bcryptjs = require('bcryptjs')

module.exports = {

    create: function (req,res){
        res.render('./auth/register',{
            linkToLogin:false,
        })
    },
    
    
    store: function (req,res){
        let errors = validationResult(req)

        if(errors.isEmpty()){
            userData.create({
    
                email:req.body.email,
                password:bcryptjs.hashSync(req.body.password),
                
                })
                
                res.send('Te has registrado correctamente')
            
        }

        console.log(errors.mapped())

        return res.render('./auth/register',{
            errors:errors.mapped(),
            linkToLogin: true,
        
        })
    
    
   

},

login: function(req,res){
    res.render('./auth/login')
},

processLogin: function(req,res){
let user = userData.findByEmail(req.body.email)

if(!user){
    return res.send('Email incorrecto')
}else if(bcryptjs.compareSync(req.body.password, user.password)){
    req.session.user = user.email

    if(req.boy.recordame){
        res.cookie('recordame',user.email,{maxAge:120 * 1000})
    }

    return res.redirect('/products')
} else {
    return res.send('Password incorrecto')
}




},


logout: function(req,res){

    req.session.destroy()
    res.cookie('recordarme', null, {masAge:0})
    return res.redirect('./auth/login')
 }

}







