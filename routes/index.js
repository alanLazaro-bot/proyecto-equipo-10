let express = require('express');
let indexController = require ('../controllers/indexController.js');
let router = express.Router();

router.get('/', indexController.index);

module.exports=router;
