let express = require('express');
let confirmacionController = require ('../controllers/confirmacionController.js');
let router = express.Router();

router.get('/confirmacion', confirmacionController);

module.exports=router;