const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsList.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let indexController ={

    index: function(req,res,next){
       
       
    
       
        res.render('index',{products});
    },

    search: (req, res) => {

		let resultado=[];

		if(req.query.search){
			resultado = products.filter(function(product){

					return product.name.includes(req.query.search) || product.description.includes(req.query.search)

				})
			}

				res.render('results',{resultado});

			}

    
    
    };
    
    module.exports=indexController;