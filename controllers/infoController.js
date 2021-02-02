

let infoController ={
    
    
    faqs:(req,res,next)=>{
        res.render('./info/preguntasFrecuentes', {titulo: 'Rmarket | Preguntas Frecuentes',ruta: 'info', stylesheet: 'preguntasFrecuentes'})

    },

    terms:(req,res,next)=>{
        res.render('./info/terminosYCondiciones', {titulo: 'Rmarket | Términos y Condiciones',ruta: 'info', stylesheet: 'terminosYCondiciones'})

    },

    shipping:(req,res,next)=>{
        res.render('./info/zonasDeEnvio',  {titulo: 'Rmarket | Envíos',ruta: 'info', stylesheet: 'zonasDeEnvio'})

    },
    
    devol:(req,res,next)=>{
        res.render('./info/devol', {titulo: 'Rmarket | Devoluciones',ruta: 'info', stylesheet: 'devol'})

    }


};

module.exports= infoController;