
const {validationResult} = require ('express-validator');
const db = require('../database/models');


let productController ={

    all:(req,res,next)=>{

		db.Productos.findAll()
		.then(products=>{
			res.render('./products/products',{products, title: 'Rmarket | Productos',ruta: 'products', stylesheet: 'products'});


		})
       
    },

    detail: (req, res) => {

		db.Productos.findByPk(req.params.id)
		.then(resultado=>{ 
			res.render('./products/productDetail',{resultado,  title: 'Rmarket | '+ resultado.title, ruta: 'products', stylesheet: 'productDetail'})
		})
		.catch (error =>{
		  res.render('error',{error:error});
	  
	  })
			
	},

    create: function(req,res,next){
	
		res.render('./products/productCreate',{title: 'Rmarket | Producto Nuevo', ruta: 'products', stylesheet: 'productAdd', data: req.body});
		
	},
	
    store: (req, res,next) => {

		db.Productos.create({
			title: req.body.title,
			price: req.body.price,
			size: req.body.size,
			description:req.body.description,
			color:req.body.color,
			stock: req.body.stock,
			

		})
		.catch (error =>{
			res.render('error',{error:error});
		
		})
		res.redirec('/')
		

    },


    edit: function(req,res,next){

		db.Productos.findByPk(req.params.id)
		.then(resultado=>{ 
			res.render('./products/productDetail',{resultado,  title: 'Rmarket | '+ resultado.title, ruta: 'products', stylesheet: 'productDetail'})
		})
		.catch (error =>{
		  res.render('error',{error:error});
	  
	  })
		 
    },

	update: (req, res) => {
		
		db.Productos.update({
			title: req.body.title,
			price: req.body.price,
			size: req.body.size,
			description:req.body.description,
			color:req.body.color,
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

		db.Productos.destroy({

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