const {body,check} = require ('express-validator');
const userData = require('../data/users')

module.exports = [

check('email')
    .isEmail()
    .withMessage('El email debe tener un formato valido')
    .isEmpty(),

body('email').custom(function (value){

    let user = userData.findByEmail(value)

    if (user){
        throw new Error('Este email ya se encuentra registrado')
    }
return true


}),

check ('first_name')
    .isLength({min: 2}),
    
check ('last_name')
    .isEmpty(),

check('password')
    .isLength({min: 8})
    .isEmpty()
    



]