

let cartController ={


cart: function(req,res,next){
    res.render('./productCart', {titulo: 'Rmarket | Carrito', ruta: undefined,stylesheet: 'productCart'});

}

};

module.exports= cartController;
