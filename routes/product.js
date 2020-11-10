let express = require('express');
let productController = require ('../controllers/productController.js');
let router = express.Router();

router.get('/products/', productController.list);
<<<<<<< HEAD
router.get('/products/detail', productController.detail);
router.get('/products/create', productController.create);
//router.post('/products/create', productController.create);
router.get('/products/edit', productController.edit);
//router.put('/products/:id', productController.edit);
//router.delete('/products/:id', productController.delete);
=======
router.get('/products/:id', productController.detail);
router.get('/products/create', productController.create);
router.post('/products/create', productController.create);
router.get('/products/:id/edit', productController.edit);
router.put('/products/:id', productController.edit);
router.delete('/products/:id', productController.delete);
>>>>>>> 42a34dea3e7d6ae6db38816461778c07745ace0d
router.get('/products/cart', productController.cart);

module.exports=router;