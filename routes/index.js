let express = require('express');
let indexController = require ('../controllers/indexController.js');
let router = express.Router();
//var checkIp = require('../middlewares/check-ip')
//const {check,validationResult,body} = require('express-validator');

router.get('/',indexController.index);
router.get('/search', indexController.search); 

module.exports=router;


//router.get('/',checkIp, indexController.index);
