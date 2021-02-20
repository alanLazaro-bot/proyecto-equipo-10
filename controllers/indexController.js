
const db= require('../database/models');




let indexController ={

    index: function(req,res,next){
		db.Productos.findAll()
		.then(products=>{
			res.render('index',{products, titulo: 'Rmarket | Inicios',ruta: undefined, stylesheet: 'index'});


		})
       
       
    },
	search: function(req, res) {

		let products =  db.Productos.findAll({
			where: {
				title: {
					title:{[db.sequelize.Op.like]: req.body.search }
				}
			},
			limit: 12
		})

		.then(resultado=>{
			return res.render('results',{resultado:resultado,  titulo: 'Rmarket | Inicio',ruta: undefined, stylesheet: 'index'})

		})
		.catch (error =>{
			res.render('error.ejs',{error:error});
		
		  })


	}
}



	/*

    search: (req, res) => {

			 db.Productos.findAll({
				where: {
					title:{[db.Sequelize.Op.like]:'%'+ req.body.search + '%'}
					
				}
				

				})
				.then(resultado=>{
					res.render('results',{resultado:resultado,  titulo: 'Rmarket | Inicio',ruta: undefined, stylesheet: 'index'})

				})
				.catch (error =>{
					res.render('error.ejs',{error:error});
				
				  })


			}

    */
    
    
    module.exports=indexController;