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

		res.render('./products/productDetail',{resultado});
	},

    create: function(req,res,next){

        res.render('./products/productCreate');
        
	},
	

    store: (req, res) => {
		let filePath= path.resolve('data','productsList.json')
		let content = fs.readFileSync(filePath,{encoding:'utf-8'})
		

		content= JSON.parse(content)


		content.push({

			name: req.body.name,
			price: req.body.price,
			size: req.body.size,
			category:req.body.category,
			description:req.body.description,
			
			id: content[content.length-1].id+1

		})

		content = JSON.stringify(content)

		fs.writeFileSync(filePath, content)

		res.send('recibido')

    },



    edit: function(req,res,next){
		
		let resultado = products.find(function(product){
			return product.id == req.params.id
		})

		res.render('./products/productEdit',{resultado:resultado})

       
    },

    update: function(req, res) {
		
		let filePath= path.resolve('data','productsList.json')
		let data = fs.readFileSync(filePath,{encoding:'utf-8'})
		

		data = JSON.parse(data)

		data.forEach(function(product){
			
			if(product.id==req.params.id){

			
			product.name= req.body.name;
            product.description= req.body.description;
            product.price= req.body.price;
            product.image= req.body.image;
            product.category= req.body.category;
            product.keywords= req.body.keywords;
            product.size= req.body.size;
            product.colors= req.body.colors;

			}	
			});
		data = JSON.stringify(data)

		fs.writeFileSync(filePath, data)
		res.redirect('./products/products')

		
		
	},

   
    destroy: function(req,res,next){
        res.render('./products/delete')
    }
    
    
    
};

module.exports= productController;