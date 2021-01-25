
let db = require('../database/models')



let indexController ={

    index: function(req,res,next){
		db.Productos.findAll()
		.then(products=>{
			res.render('index',{products, title: 'Rmarket | Inicios',ruta: undefined, stylesheet: 'index'});


		})
       
       
    },

    search: (req, res) => {

		let resultado=[];

		if(req.query.search){
			resultado = db.Productos.findAll({
				where: {
					title:{[db.Sequelize.Op.like]:'%'+ req.body.search + '%'}
					


				}
				
			

				})
			}

				res.render('results',{resultado,  title: 'Rmarket | Inicio',ruta: undefined, stylesheet: 'index'});

			}

    
    
    };
    
    module.exports=indexController;