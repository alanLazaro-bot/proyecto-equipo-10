/*var express = require ('express');
var router = express.Router();
var db = require ('../database/models')
var bcrypt = require('bcryptjs')

/*http://localhost:3000/api/check 

router.get('check', function(req,res,next){

    db.User.findOne({

        where:{
            email: req.query.email
        }
    }).then(result =>{

        if(result){
           res.status(200).json({})
        }else {
            res.status(404).json({})
        }


    }).catch(err => {

        res.send(err)
    })


})

router.post('/users', function (req,res){
    db.User.create({
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password, 3)

    }).then( result => {

        res.status(201).json({})
        res.json()

    }).catch(error =>{

        res.json(error)
    })

    

})

module.exports = router;*/