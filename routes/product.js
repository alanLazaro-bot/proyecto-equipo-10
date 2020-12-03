let express = require('express');
let productController = require ('../controllers/productController.js');
let router = express.Router();

const {check,validationResult,body} = require('express-validator');


/*** GET ALL PRODUCTS ***/
router.get('/products', productController.all);

/*** GET ONE PRODUCT ***/ 

router.get('/products/:id', productController.detail);

/*** CREATE ONE PRODUCT ***/ 

router.get('/products/create/nuevo', productController.create);
router.post('/products', productController.store);

/*** EDIT ONE PRODUCT ***/
router.get('/products/edit/:id', productController.edit);
router.put('/products/edit/:id', productController.update);



/*** DELETE ONE PRODUCT***/
router.delete('/products/:id', productController.destroy);


module.exports=router;