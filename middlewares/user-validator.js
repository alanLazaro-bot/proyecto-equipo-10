const {body,check} = require ('express-validator');
let db = require('../database/models')



module.exports = [

    body("email")
    .notEmpty()
    .withMessage("Campo obligatorio")
    
    .isEmail()
    .withMessage("Debes ingresar un email válido")
    
    .custom((value) => {
      return db.Usuarios.findOne({
        where: {
          email: value,
        },
      }).then((user) => {
        if (user) {
          return Promise.reject("Email registrado");
        }
      });
    }),

check ('first_name')
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min: 2})
    .withMessage('El nombre debe tener un mínimo de dos caracteres'),
    
check ('last_name')
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min: 2})
    .withMessage('El apellido debe tener un mínimo de dos caracteres'),
    
   

check('password')
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min: 8}),
   /* .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    .withMessage('La contraseña debe tener un mínimo de 8 caracteres, ser alfanumérica, tener mayúsculas y minúsculas'),*/
    

]