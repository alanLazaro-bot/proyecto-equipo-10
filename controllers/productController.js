const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsList.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



let productController ={

    all:(req,res,next)=>{
        res.render('./products/products',{products});
    },

    detail: (req, res) => {
		

		let resultado = products.find(function(product){
			return product.id == req.params.id
		})

		res.render('./products/productDetail',{resultado})
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