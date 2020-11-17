let express = require('express');
let productController = require ('../controllers/productController.js');
let router = express.Router();

/*** GET ALL PRODUCTS ***/
router.get('/products', productController.all);

/*** GET ONE PRODUCT ***/ 

router.get('/products/:id', productController.detail);

/*** CREATE ONE PRODUCT ***/ 

router.get('/products/create', productController.create);
router.post('/', productController.create);

/*** EDIT ONE PRODUCT ***/
router.get('/products/edit/:id', productController.edit);
router.put('/', productController.update);



/*** DELETE ONE PRODUCT***/
router.delete('/products/:id', productController.destroy);


module.exports=router;