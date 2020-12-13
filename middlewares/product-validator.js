const {check} = require ('express-validator');


module.exports = [


check('title')

    .isLength({min:3, max:50})
    .withMessage('El titulo debe contener minimo 3 caracteres y máximo 50.'),

check('stock')

    .isInt({gt:0, lt:100})
    .withMessage('El stock debe ser mayor a 0 y menor que 100'),

    



]

