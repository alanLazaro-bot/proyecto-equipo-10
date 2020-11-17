let express = require('express');
let productController = require ('../controllers/productController.js');
let router = express.Router();

router.get('/products', productController.all);
router.get('/products/:id', productController.detail);
router.get('/products/create', productController.create);
router.post('/', productController.create);
router.get('/products/edit', productController.edit);
router.put('/products/edit', productController.edit);

router.get('/products/cart', productController.cart);

module.exports=router;