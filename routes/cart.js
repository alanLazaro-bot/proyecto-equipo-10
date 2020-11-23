let express = require('express');
let cartController = require ('../controllers/cartController.js');
let router = express.Router();
const {check,validationResult,body} = require('express-validator');

router.get('/cart', cartController.cart);

module.exports=router;
