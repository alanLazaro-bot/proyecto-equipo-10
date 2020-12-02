var fs = require ('fs')
let {validationResult} = require('express-validator')
var userData = require('../data/user')
var bcryptjs = require('bcryptjs')

module.exports = {

    create: function (req,res){
        res.render('auth/register',{
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

        return res.render('auth/register',{
            errors:errors.mapped(),
            linkToLogin: true,
        
        })
    
    
   

},

login: function(req,res){
    res.render('auth/login')
},

processLogin: function(req,res){
let user = userData.findByEmail(req.body.email)

if(user)



}

}

