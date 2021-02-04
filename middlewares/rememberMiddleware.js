
const db = require('../database/models')

module.exports = function(req,res,next){
if(req.cookies.recordame && !req.session.user){


    db.Usuarios.findOne({

        where:{
            email:req.cookies.recordame
        }    
    
    }).then(user=>{

        user = req.session.user = user.mail
    }).catch(error =>{
        res.render('error',{error:error});
    })
  
} 
    
next()

}