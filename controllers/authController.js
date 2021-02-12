var fs = require ('fs')
let {validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')
let db = require('../database/models')

module.exports = {
  
  create: function (req,res){
    res.render('./auth/register',{
      linkToLogin:false, titulo: 'Rmarket | Registrate',ruta: 'users', stylesheet: 'register', data: {}, errors:{}})
      
      
    },
    
    
    store: function (req, res) {
      const errors = validationResult(req);
      
      
      if (errors.isEmpty()) {
        
        db.Usuarios.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: bcryptjs.hashSync(req.body.password,10)            
          
        })
        .then(resultado =>{
          res.redirect('/')
          
        })
        
        .catch(error =>{
          res.render('error',{error:error})
        })
        
        
      } else {
        return   res.render('./auth/register',{errors:errors.mapped(), linkToLogin: true, data: req.body, titulo: 'Rmarket | Registrate',ruta: 'users', stylesheet: 'register'})
      };
    },
    
    
    profile: function (req, res) {
      console.log(req.session.user.id) 
      db.Usuarios.findByPk(req.session.user.id, {
        include:["direccion"]
        
      }).then((user) =>{
      
      
      res.render("./auth/user-info", { user:user, titulo: 'Rmarket | Registrate',ruta: 'users', stylesheet: 'profile', data: {}, errors:{} })})
      
    },
    
    
    edit: function (req, res) {
      
      db.Usuarios.findByPk(req.session.user.id, {
        include : ["direccion"]
        
      }).then((user)=>{ 
        console.log(user)
        
       
         res.render("./auth/user-info-edit", { user: user,titulo: 'Rmarket | Registrate',ruta: 'users', stylesheet: 'profile', data: {} })})
      
      
    },
    
    update(req, res) {
      db.Usuarios.update({
        calle:req.body.calle,
        numero:req.body.numero,
        localidad: req.body.numero,
        provincia:req.body.provincia,
        codigo_postal:req.body.codigo_postal,
        image:req.body.file.image
        
        
      })
      .then((user) => res.redirect("" + req.params.id))
      .catch((e) => console.log(e));
    },
    
    
    
    
    
    
    
    
    login: function(req,res){
      res.render('./auth/login', {titulo: 'Rmarket | Ingresá a tu cuenta',ruta: 'users', stylesheet: 'login', errors:{}})
    },
    
    processLogin: function(req,res){
      
      const errors = validationResult(req);
      
      if (errors.isEmpty()) {
        db.Usuarios.findOne({
          where: {
            email: req.body.email,
          },
        }).then((user)=>{
          let _user = user;
          req.session.user = _user
          console.log(_user)    
          if(req.body.remember){
            res.cookie('remember',_user.email,{maxAge:120 * 1000})
            console.log(req.body.remember)
            
            return res.redirect('/')
            
          } else{
            return res.redirect('/')
            
          }
           
          
        }).catch((e) => console.log(e));
        
      } else {
        return res.render("./auth/login", {errors: errors.mapped(),data:req.body, titulo: 'Rmarket | Ingresá a tu cuenta',ruta: 'users', stylesheet: 'login'})
        
      }
    },    
    
    
    
    
    finalLogin: function(req,res){
      
      res.render('auth/user-info', {titulo: 'Rmarket | Bienvenid@', ruta: 'users', stylesheet: 'user-info'})
      
    },
    
    
    logout: function(req,res){
      
      req.session.destroy()
      res.cookie('recordame', null, {maxAge: 0})
      return res.redirect('/')
    }
    
  }
  
  
  
  
  
  
  
  