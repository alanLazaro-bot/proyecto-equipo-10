var express = require ('express');
var router = express.Router();
var db = require ('../database/models')

/*http://localhost:3000/api/check */
router.get('check', function(req,res,next){
    res.json({'message': 'verificar email'})




})

module.exports = router