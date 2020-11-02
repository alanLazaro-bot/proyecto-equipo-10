let express = require('express');
let productController = require ('../controllers/productController.js');
let router = express.Router();


router.get('/product/detail', productController.detail);
router.get('/product/add', productController.add);
router.get('/product/edit', productController.edit);
router.get('/product/cart', productController.cart);

module.exports=router;