let express = require('express');
var router = express.Router();
var path = require('path');
let authController = require ('../controllers/authController.js');
let multer = require ('multer')
let userValidator = require('../middlewares/user-validator')


var storage = multer.diskStorage({

    destination : function(req,file,cb){
        cb(null,path.resolve('public','images'))
    }, 
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({storage})


router.get('/auth/register', authController.create);
//router.post('/auth/register', authController.store);
router.post('/auth/register', userValidator ,authController.store);

router.get('auth/avatar',function(req,res){
    res.render('auth/avatar-form')
})

router.post('/auth/avatar', function(req,res,next){
    console.log(req.files)
    res.send('recibido')
})


router.get('/auth/login', authController.login);
router.post('/auth/login', authController.processLogin);

router.get('/auth/user-info',authController.finalLogin);

router.post('/auth/logout', authController.logout);



//router.get('/users/edit', usersController.edit);

module.exports=router;
