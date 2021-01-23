let express = require('express');
var router = express.Router();
var path = require('path');
let authController = require ('../controllers/authController.js');
let multer = require ('multer')
let userValidator = require('../middlewares/user-validator.js')


var storage = multer.diskStorage({

    destination : function(req,file,cb){
        cb(null,path.resolve('public','images'))
    }, 
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({storage})


router.get('/register', authController.create);

router.post('/register', userValidator , upload.any(),authController.store);

router.get('/avatar',function(req,res){
    res.render('auth/avatar-form')
})

router.post('/avatar', function(req,res,next){
    console.log(req.files)
    res.send('recibido')
})


router.get('/login', authController.login);
router.post('/login', authController.processLogin);

router.get('/:id',authController.finalLogin);

router.post('/logout', authController.logout);



//router.get('/auth/edit', usersController.edit);

module.exports=router;
