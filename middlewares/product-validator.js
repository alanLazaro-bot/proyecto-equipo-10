const {check, body} = require ('express-validator');


module.exports = [


check('title')
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:5, max:50})
    .withMessage('El titulo debe contener minimo 5 caracteres y máximo 50.'),
    

check('stock')
.notEmpty()
.withMessage("Campo obligatorio")
.isInt({gt:0, lt:100})
.withMessage('El stock debe ser mayor a 0 y menor que 100'),
    

check('description')
.notEmpty()
.withMessage("Campo obligatorio")
.isLength({min:20, max:200})
.withMessage('La descripcion debe tener un mínimo de 20 caracteres y un máximo de 200'),
    

check('size')
.notEmpty()
.withMessage("Campo obligatorio"),



body("price")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isNumeric()
    .withMessage("Solo se aceptan números")
    .custom((value, { req }) => req.body.price > 0)
    .withMessage("No se aceptan números negativos"),

    
body("price")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .custom((value) => parseInt(value, 10) > 0)
    .withMessage("No se aceptan números negativos"),

    body("image")
    .custom((value, { req }) => req.file)
    .withMessage("Debes ingresar una imagen para tu producto")
    



]