const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsList.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



let productController ={

    all:(req,res,next)=>{
        res.render('./products/products',{products});
    },

    detail: (req, res) => {
		

		let resultado = products.find(function(product){
			return product.id == req.params.id
		})

		res.render('./products/productDetail',{resultado});
	},

    create: function(req,res,next){

        res.render('./products/productCreate');
        
	},
	

    store: (req, res) => {
	
		products.push({

			name: req.body.name,
			price: req.body.price,
			size: req.body.size,
			category:req.body.category,
			description:req.body.description,
			id: products[products.length-1].id+1

		})

		products = JSON.stringify(products)

		fs.writeFileSync(productsFilePath, products)

		res.send('recibido')

    },



    edit: function(req,res,next){
		
		let resultado = products.find(function(product){
			return product.id == req.params.id
		})

		res.render('./products/productEdit',{resultado:resultado})

       
    },

	update: (req, res) => {
		
		products.forEach(function(product){
			
			if(product.id==req.params.id){

			product.name = req.body.name;
			product.price = req.body.price;
			product.discount = req.body.discount;
			product.category = req.body.category;
			product.description = req.body.description;
			}	
			});
		products = JSON.stringify(products)

		fs.writeFileSync(productsFilePath, products)
		res.redirect('/')

		
		
	},

   
    destroy: function(req,res,next){
        res.render('./products/delete')
    }
    
    
    
};

module.exports= productController;