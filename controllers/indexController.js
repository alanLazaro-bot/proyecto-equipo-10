
const db = require('../database/models');
const { Op } = require('sequelize')




let indexController ={

    index: function(req,res,next){
		db.Productos.findAll()
		.then(products=>{
			res.render('index',{products, titulo: 'Rmarket | Inicios',ruta: undefined, stylesheet: 'index'});


		})
       
       
    },
	search: function(req, res) {
		db.Productos.findAll({
			where: {
					title:{[db.Sequelize.Op.substring]: req.query.search }
				},
			limit: 12
		})

		.then(resultado=>{
			return res.render('results',{resultado:resultado,  titulo: 'Rmarket | Inicio',ruta: undefined, stylesheet: 'results'})

		})
		.catch (error =>{
			res.render('error.ejs',{error:error});
		
		  })


	}
}




    
    module.exports=indexController;