const db = require('../database/models');
let usersController ={
    
    login: function (req,res,next){
        res.render('./users/login');

    },

    register: function (req,res,next){
        res.render('./users/register');
        db.usuarios.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        })
    },

    edit: function(req,res,next){
        res.render('./users/edit');

    }

};

module.exports= usersController;