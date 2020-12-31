

let cartController ={


cart: function(req,res,next){
    res.render('./productCart', {title: 'Rmarket | Carrito', ruta: undefined,stylesheet: 'productCart'});

}

};

module.exports= cartController;
