const {body,check} = require ('express-validator');
let db = require('../database/models')



module.exports = [

check('email')
    .isEmail()
    .isEmpty()
    .withMessage('El email debe tener un formato válido'),
    

body('email').custom(function (value){

    let user = db.Usuario.findByEmail(value)

    if (user){
        throw new Error('Este email ya se encuentra registrado')
    }
return true


}),

check ('first_name')
    .isLength({min: 2})
    .isEmpty()
    .withMessage('El nombre debe tener un mínimo de dos caracteres'),
    
check ('last_name')
    .isLength({min: 2})
    .isEmpty()
    .withMessage('El apellido debe tener un mínimo de dos caracteres'),
    
   

check('password')
    .isLength({min: 8})
    .isEmpty()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    .withMessage('La contraseña debe tener un mínimo de 8 caracteres, ser alfanumérica, tener mayúsculas y minúsculas'),
    

]