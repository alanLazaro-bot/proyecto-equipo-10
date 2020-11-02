let usersController ={
    
    login: function (req,res,next){

        res.render('./users/login');

    },

    register: function (req,res,next){
        res.render('./users/register');

    },

    edit: function(req,res,next){
        res.render('./users/edit');

    }

};

module.exports= usersController;