let express = require('express');
let usersController = require ('../controllers/usersController.js');
let router = express.Router();
const {check,validationResult,body} = require('express-validator');


router.get('/users/register', usersController.register);
router.get('/users/login', usersController.login);
router.get('/users/edit', usersController.edit);

module.exports=router;
