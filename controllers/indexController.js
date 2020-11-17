const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsList.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));




let indexController ={

    index: function(req,res,next){
       
       
       
       
       
        res.render('index',{products});
    }
    
    
    };
    
    module.exports=indexController;