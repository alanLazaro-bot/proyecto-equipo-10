let express = require('express');
let cartController = require ('../controllers/cartController.js');
let router = express.Router();

router.get('/cart', cartController.cart);

module.exports=router;
