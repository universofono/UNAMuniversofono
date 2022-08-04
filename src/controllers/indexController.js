const indexController={}
indexController.renderIndex=(req,res)=>{
    res.render('index',{namePage:'Universo FONO'});
}
indexController.renderAbout=(req,res)=>{
    res.render('about',{namePage:'Acerca de nosotros'});
}
indexController.renderActivities=(req,res)=>{
    res.render('activities',{namePage:'Nuestras actividades'});
}
indexController.renderJoinUp=(req,res)=>{
    res.render('joinUp',{namePage:'Unete a la familia FONO'});
}
/***********   SARA LA ORUGA ************* */
indexController.renderSaraQuiz=(req,res)=>{
    res.render('sara/saraQuiz',{namePage:'Index Quiz de sara la oruga'});
}
indexController.renderGameSara=(req,res)=>{
    res.render('sara/gameSara',{namePage:'Quiz de sara la oruga'});
}
indexController.renderEnd0=(req,res)=>{
    res.render('sara/end-0pts',{namePage:'Fin 1 Quiz de sara la oruga'});
}
indexController.renderEnd100=(req,res)=>{
    res.render('sara/end-100pts',{namePage:'Fin 2 Quiz de sara la oruga'});
}
indexController.renderEnd200=(req,res)=>{
    res.render('sara/end-200pts',{namePage:'Fin 3 Quiz de sara la oruga'});
}
indexController.renderEnd300=(req,res)=>{
    res.render('sara/end-300pts',{namePage:'Fin 4 Quiz de sara la oruga'});
}
indexController.renderEnd400=(req,res)=>{
    res.render('sara/end-400pts',{namePage:'Fin 5 Quiz de sara la oruga'});
}


/* indexController.getData=(req,res)=>{
    res.render('pacientes/historial',{namePage:''});
}
*/

indexController.renderPrueba=(req,res)=>{
    res.render('origen',{namePage:'prueba'});
}


module.exports=indexController;