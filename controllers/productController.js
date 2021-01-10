const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsList.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const {validationResult} = require ('express-validator');
const db = require('../database/models');


let productController ={

    all:(req,res,next)=>{

		db.productos.findAll()
		.then(products=>{
			res.render('./products/products',{products, title: 'Rmarket | Productos',ruta: 'products', stylesheet: 'products'});


		})
       
    },

    detail: (req, res) => {

		db.productos.findByPk(req.params.id)
		.then(resultado=>{ 
			res.render('./products/productDetail',{resultado,  title: 'Rmarket | '+ resultado.name, ruta: 'products', stylesheet: 'productDetail'})
		})
		.catch (error =>{
		  res.render('error.ejs',{error:error});
	  
	  })
			
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

		db.productos.create({
			name: req.body.name,
			price: req.body.price,
			size: req.body.size,
			description:req.body.description,
			stock: req.body.stock,
			

		})
		

    },


    edit: function(req,res,next){

		db.productos.findByPk(req.params.id)
		.then(resultado=>{ 
			res.render('./products/productDetail',{resultado,  title: 'Rmarket | '+ resultado.name, ruta: 'products', stylesheet: 'productDetail'})
		})
		.catch (error =>{
		  res.render('error.ejs',{error:error});
	  
	  })
		 
    },

	update: (req, res) => {
		
		db.productos.update({
			name: req.body.name,
			price: req.body.price,
			size: req.body.size,
			description:req.body.description,
			stock: req.body.stock,

		},
		
		{
			where:{
			  id:req.params.id
			}
		  }
		  
		 .then(resultado =>{
			res.render('./products/productEdit',{resultado: resultado,  title: 'Rmarket | '+ resultado.name, ruta: 'products', stylesheet: 'productEdit'})
			
		 })

		 .catch(err =>{
			 res.send(err)
		 })
		  );
		
	},


    destroy: function(req,res,next){

		db.productos.destroy({

			where:{

				id: req.params.id
			}
		})
		.then(resultado=>{
			res.render('./products/delete')

		})

		.catch(err => {
			console.log(err)
			res.send(err)
			/*Aca deberia enviar una vista que aclare el error al usuario*/
			
		})
        
    }
    
    
    
};

module.exports= productController;