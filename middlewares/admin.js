// ******** Sequelize ***********
/*Este middleware se encarga de mandar al usuario al home si no es administrador como para poder editar o eliminar productos*/ 

const db = require('../database/models');

module.exports = (req, res, next) => {
   db.Usuario.findByPk(req.params.id)
      .then(user => {
         if(user){
            if(req.session.user.user_type != 'admin'){
               return res.redirect('/');
            }
            return next();
         }
         return next();
      })
}