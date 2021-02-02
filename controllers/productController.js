
const {validationResult} = require ('express-validator');
const db = require('../database/models');


let productController ={

    all:(req,res,next)=>{

		db.Productos.findAll()
		.then(products=>{
			res.render('./products/products',{products, titulo: 'Rmarket | Productos',ruta: 'products', stylesheet: 'products'});


		})
       
    },

    detail: (req, res) => {

		console.log(req.body)

		db.Productos.findByPk(req.params.id)
		.then(prod=>{ 
			let resultado = prod
			
			res.render('./products/productDetail',{resultado: prod,  titulo: 'Rmarket | ', ruta: 'products', stylesheet: 'productDetail'})
		})
		.catch (error =>{
		  res.render('error',{error:error});
	  
	  })
			
	},

    create: function(req,res,next){
	
	
		res.render('./products/productCreate',{titulo: 'Rmarket | Producto Nuevo', ruta: 'products', stylesheet: 'productAdd',data: {},
		errors : {}});
		
	},
	
    store: (req, res,next) => {

		const errors = validationResult(req);

		if (!errors.isEmpty()){
			res.render('./products/productCreate', {
				errors : errors.mapped(),
				data: req.body,  titulo: 'Rmarket | Producto Nuevo', ruta: 'products', stylesheet: 'productAdd'})
		}


		db.Productos.create({
			title: req.body.title,
			price: req.body.price,
			size: req.body.size,
			description:req.body.description,
			stock: req.body.stock,
			

		})
		.then(resultado=> {
			return res.redirect('/products')
		})
		.catch (error =>{
			res.render('error',{error:error});
		
		})
	
		
		

    },


    edit: function(req,res,next){

		db.Productos.findByPk(req.params.id)
		.then(resultado=>{ 
			res.render('./products/productEdit',{resultado,  titulo: 'Rmarket | '+ resultado.title, ruta: 'products', stylesheet: 'productDetail', data: req.body, errors : {}})
		})
		.catch (error =>{
		  res.render('error',{error:error});
	  
	  })


		 
    },

	update: (req, res) => {

		const errors = validationResult(req);
		
		if (!errors.isEmpty()){
			res.render('./products/productEdit', {
				errors : errors.mapped(),
				data: req.body,  titulo: 'Rmarket | Producto ', ruta: 'products', stylesheet: 'productDetail'})
		}
		
		db.Productos.update({
			title: req.body.title,
			price: req.body.price,
			size: req.body.size,
			description:req.body.description,
			stock: req.body.stock,

		},
		
		{
			where:{
			  id:req.params.id
			}
		  })
		  
		 .then(resultado =>{
			res.redirect('/')
			
		 })

		 .catch(err =>{
			 res.send(err)
		 })
		  
		
	},


    destroy: function(req,res,next){

		db.Productos.destroy({
			where:{
				id: req.params.id
			}
		})
		.then(resultado=>{
			res.redirect('/')

		})
		.catch(err => {
			console.log(err)
			res.send(err)
			/*Aca deberia enviar una vista que aclare el error al usuario*/
			
		})
        
    }
    
    
    
};

module.exports= productController;