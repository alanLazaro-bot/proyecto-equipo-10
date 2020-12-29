

let infoController ={
    
    
    faqs:(req,res,next)=>{
        res.render('./info/preguntasFrecuentes', {title: 'Rmarket | Preguntas Frecuentes',ruta: 'info', stylesheet: 'preguntasFrecuentes'})

    },

    terms:(req,res,next)=>{
        res.render('./info/terminosYCondiciones', {title: 'Rmarket | Términos y Condiciones',ruta: 'info', stylesheet: 'terminosYCondiciones'})

    },

    shipping:(req,res,next)=>{
        res.render('./info/zonasDeEnvio',  {title: 'Rmarket | Envíos',ruta: 'info', stylesheet: 'zonasDeEnvio'})

    },
    
    devol:(req,res,next)=>{
        res.render('./info/devol', {title: 'Rmarket | Devoluciones',ruta: 'info', stylesheet: 'devol'})

    }


};

module.exports= infoController;