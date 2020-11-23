let express = require('express');
let indexController = require ('../controllers/indexController.js');
let router = express.Router();
const {check,validationResult,body} = require('express-validator');

router.get('/', indexController.index);

module.exports=router;
