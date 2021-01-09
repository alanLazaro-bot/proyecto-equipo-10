const db = require('../database/models');

let usersController ={
    
    login: function (req,res,next){
        res.render('./users/login');

    },


    edit: function(req,res,next){
        res.render('./users/edit');

    }

};

module.exports= usersController;