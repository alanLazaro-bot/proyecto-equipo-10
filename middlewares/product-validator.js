const {check} = require ('express-validator');


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
.withMessage("Campo obligatorio")


.withMessage('Debes elegir un talle'),

check('price')
.notEmpty()
.withMessage("Campo obligatorio")


.withMessage('El precio debe ser mayor a 0'),


    



]