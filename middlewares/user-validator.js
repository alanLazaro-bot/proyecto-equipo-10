const {body,check} = require ('express-validator');
let db = require('../database/models')



module.exports = [

check('email')
    .isEmail()
    .withMessage('El email debe tener un formato valido')
    .isEmpty(),

body('email').custom(function (value){

    let user = db.Usuario.findByEmail(value)

    if (user){
        throw new Error('Este email ya se encuentra registrado')
    }
return true


}),

check ('first_name')
    .isLength({min: 2}),
    
check ('last_name')
    .isLength({min: 2})
    .isEmpty(),
    
   

check('password')
    .isLength({min: 8})
    .isEmpty()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),
    
    



    



]