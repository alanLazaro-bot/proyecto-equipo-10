let express = require('express');
let infoController = require ('../controllers/infoController.js');
let router = express.Router();

router.get('/faqs', infoController.faqs);
router.get('/terminos-y-condiciones', infoController.terms);
router.get('/zonas-envios', infoController.shipping);
router.get('/devoluciones', infoController.devol);

module.exports=router;