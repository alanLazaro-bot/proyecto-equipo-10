let productController ={


    detail:(req,res,next)=>{
        res.render('./products/productDetail');

    },

    create: function(req,res,next){
        res.render('./products/productAdd');
        
    },

    edit: function(req,res,next){
        res.render('./products/productEdit');
    },

    cart: function(req,res,next){
        res.render('./products/productCart');

    }
    
    
    
};

module.exports= productController;