let express = require('express');
let productController = require ('../controllers/productController.js');
let router = express.Router();


router.get('/products/detail', productController.detail);
router.get('/products/create', productController.create);
router.get('/products/edit', productController.edit);
router.get('/products/cart', productController.cart);

module.exports=router;