

let infoController ={
    
    
    faqs:(req,res,next)=>{
        res.render('./info/preguntasFrecuentes')

    },

    terms:(req,res,next)=>{
        res.render('./info/terminosYCondiciones')

    },

    shipping:(req,res,next)=>{
        res.render('./info/zonasDeEnvio')

    },
    
    devol:(req,res,next)=>{
        res.render('./info/devol')

    }


};

module.exports= infoController;