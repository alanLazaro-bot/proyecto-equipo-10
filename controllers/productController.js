const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsList.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const {validationResult} = require ('express-validator');




let productController ={

    all:(req,res,next)=>{
        res.render('./products/products',{products, title: 'Rmarket | Productos',ruta: 'products', stylesheet: 'products'});
    },

    detail: (req, res) => {
		

		let resultado = products.find(function(product){
			return product.id == req.params.id
		})

		res.render('./products/productDetail',{resultado,  title: 'Rmarket | '+ resultado.name, ruta: 'products', stylesheet: 'productDetail'});
	},

    create: function(req,res,next){

		res.render('./products/productCreate',{
		data: {},
		errors : {},  title: 'Rmarket | Producto Nuevo', ruta: 'products', stylesheet: 'productAdd'});
		
        
	},
	

    store: (req, res,next) => {

		let errors = validationResult(req)

		if (!errors.isEmpty()){

			res.render('./products/productCreate', {
				errors : errors.mapped(),
				data: req.body,  title: 'Rmarket | Producto Nuevo', ruta: 'products', stylesheet: 'productAdd'})
		}

	
		products.push({
			id: products[products.length-1].id+1,
			name: req.body.name,
			price: req.body.price,
			size: req.body.size,
			category:req.body.category,
			description:req.body.description,
			
			
		})
		
		products = JSON.stringify(products)

		fs.writeFileSync(productsFilePath, products)

		res.send('recibido')

    },



    edit: function(req,res,next){
		
		let resultado = products.find(function(product){
			return product.id == req.params.id
		})

		res.render('./products/productEdit',{resultado: resultado,  title: 'Rmarket | '+ resultado.name, ruta: 'products', stylesheet: 'productEdit'})

       
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

		products= products.filter(product =>{
			return product.id != req.params.id
		})

        res.render('./products/delete')
    }
    
    
    
};

module.exports= productController;