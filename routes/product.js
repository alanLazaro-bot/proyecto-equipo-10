let express = require('express');
let productController = require ('../controllers/productController.js');
let router = express.Router();
let multer = require ('multer')

let prodValidator = require('../middlewares/product-validator.js')

var storage = multer.diskStorage({

    destination : function(req,file,cb){
        cb(null,path.resolve('public','images'))
    }, 
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({storage})

/*** GET ALL PRODUCTS ***/
router.get('/', productController.all);


/*** GET ONE PRODUCT ***/ 

router.get('/:id', productController.detail);

/*** CREATE ONE PRODUCT ***/ 

router.get('/create', productController.create);
router.post('/create', prodValidator,upload.any(), productController.store);

/*** EDIT ONE PRODUCT ***/
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', prodValidator ,productController.update);



/*** DELETE ONE PRODUCT***/
router.delete('/:id', productController.destroy);


module.exports=router;