let express = require('express');
let productController = require ('../controllers/productController.js');
let router = express.Router();

router.get('/products/', productController.list);
router.get('/products/detail', productController.detail);
router.get('/products/create', productController.create);
//router.post('/products/create', productController.create);
router.get('/products/edit', productController.edit);
//router.put('/products/:id', productController.edit);
//router.delete('/products/:id', productController.delete);
router.get('/products/cart', productController.cart);

module.exports=router;