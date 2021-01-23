const {check} = require ('express-validator');


module.exports = [


check('title')

    .isLength({min:5, max:50})
    .isEmpty()
    .withMessage('El titulo debe contener minimo 5 caracteres y máximo 50.'),
    

check('stock')

    .isInt({gt:0, lt:100})
    .isEmpty()
    .withMessage('El stock debe ser mayor a 0 y menor que 100'),
    

check('description')

    .isLength({min:20, max:200})
    .isEmpty()
    .withMessage('La descripcion debe tener un mínimo de 20 caracteres y un máximo de 200'),
    
    

check('color')

    .isLength('')
    .isEmpty()
    .withMessage(''),
    

check('size')
.isEmpty(),

check('price')
.isEmpty(),


    



]