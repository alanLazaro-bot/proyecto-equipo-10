const {check, body} = require ('express-validator');


module.exports = [

    check("email")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isEmail()
    .withMessage('El e-mail ingresado no es válido'),
    
    check("password")
    .notEmpty()
    .withMessage("Campo obligatorio"),

    check('password').isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres, una mayúscula y una minúscula ')
]



