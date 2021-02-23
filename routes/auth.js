let express = require('express');
var router = express.Router();
const path = require('path');
let authController = require ('../controllers/authController.js');
let multer = require ('multer')
let userValidator = require('../middlewares/user-validator.js')
let loginValidator = require('../middlewares/loginvalidator.js')



var storage = multer.diskStorage({

    destination : function(req,file,cb){
        cb(null,path.resolve('public','images'))
    }, 
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage})

router.get('/profile/', authController.profile); /* GET - user detail */
router.get('/register', authController.create);

router.post('/register', userValidator.register,authController.store);// upload.any()

router.get('/login', authController.login);
router.post('/login', loginValidator ,authController.processLogin);

router.get('/:id',authController.finalLogin);

router.post('/logout', authController.logout);


router.get('/:id/edit/', authController.edit); 
//router.patch('/:id',upload.single('image') ,authController.update); 

router.get('/:id/addAddress',authController.address)
router.patch('/address/:id', authController.addressAdd)

router.delete('/:id', authController.destroy)



//router.get('/auth/edit', usersController.edit);

module.exports=router;
