/*let express = require('express');
var router = express.Router();
var path = require('path');
let usersController = require ('../controllers/api/usersController.js');
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


router.get('/', usersController.list)
router.get('/:id', usersController.single)





module.exports=router;*/