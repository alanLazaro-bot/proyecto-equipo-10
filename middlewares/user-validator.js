const {body,check} = require ('express-validator');
let db = require('../database/models')



module.exports = {

  register :[
    

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

    
  ],

  login:[
    
    check("email")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isEmail()
    .withMessage("Debes ingresar un email válido"),
    
    check("password")
    .notEmpty()
    .withMessage("Campo obligatorio"),
  ]
  }