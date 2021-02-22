let express = require('express');
let router = express.Router();
let multer = require ('multer')
const path = require('path');
let productController = require ('../controllers/productController.js');
let prodValidator = require('../middlewares/product-validator.js')
let authMiddleware = require('../middlewares/auth.js')

var storage = multer.diskStorage({

    destination : function(req,file,cb){
        cb(null,path.resolve(__dirname, '../public/images/products'))
    }, 
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({storage})

/*** GET ALL PRODUCTS ***/
router.get('/', productController.all);
/*** GET ONE PRODUCT ***/ 

router.get('/detail/:id', productController.detail);

/*** CREATE ONE PRODUCT ***/ 

router.get('/new',authMiddleware, productController.create);
router.post('/create',authMiddleware, upload.single('image'),prodValidator,productController.store);


/*** EDIT ONE PRODUCT ***/
router.get('/:id/edit', productController.edit);
router.patch('/:id', upload.single('image'),prodValidator,productController.update);


/*** DELETE ONE PRODUCT***/
router.delete('/:id', productController.destroy);



module.exports=router;