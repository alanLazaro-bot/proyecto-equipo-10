let express = require('express');
let productController = require ('../controllers/productController.js');
let router = express.Router();
let multer = require ('multer')

let prodValidator = require('../middlewares/product-validator.js')
/*
var storage = multer.diskStorage({

    destination : function(req,file,cb){
        cb(null,path.resolve('public','images'))
    }, 
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({storage})
*/
/*** GET ALL PRODUCTS ***/
router.get('/', productController.all);

/*** CREATE ONE PRODUCT ***/ 

router.get('/new', productController.create);
router.post('/create', prodValidator, productController.store);


/*** GET ONE PRODUCT ***/ 

router.get('/:id', productController.detail);



/*** EDIT ONE PRODUCT ***/
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', prodValidator ,productController.update);



/*** DELETE ONE PRODUCT***/
router.delete('/:id', productController.destroy);


module.exports=router;