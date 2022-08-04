
const express = require('express');
const app=express();
const php = require('node-php');
const session = require('express-session')
const flash=require('connect-flash')
const path = require('path')
const exphbs=require('express-handlebars')
const ejs = require('ejs');



//initialitation
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'node-php')


// define a route



// lectura de DATOS /************************************************************ */
app.set('view engine','ejs')
const pacientes ={
    nombre: String,
    apellidos: String,
    clave:Number,
    expediente:Number,
    diagnostico:String,
    fechaNac:String,
    genero:String,
    email:String,
    edad:Number,
    telefono:Number

}
const mongoose=require('mongoose');
const paci=mongoose.model('patient',pacientes);
var i = 0
/* LISTA EXPEDIENTE */
app.get('/listaPaciente',(req,res) =>{        
        paci.find({},function(err,patients){
            res.render('pacientes/listExpediente.ejs',{
                listaPaciente: patients,
                i,
            })
        });
    });
    app.get('/expCompleto',(req,res) =>{        
        paci.find({},function(err,patients){
            res.render('pacientes/expedienteCompleto.ejs',{
                listaPaciente: patients,
                vari: i
            })
        });
    });
    

//////
app.get('/init', (req, response) => {
    response.sendFile(__dirname + '/views/destino.php');
    
  })
  


/******************************************************************************* */

//settings

app.set('port',process.env.PORT||5000);

app.set('views',path.join(__dirname,'views'));
// enable handlebars as view
app.engine('.hbs',exphbs.engine({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs',
}));
app.set('view engine','.hbs')


//Middlewares

app.use(express.urlencoded({extended:true}));
app.use(
    session({
        secret:'secreto',
        resave:true,
        saveUninitialized:true,
    })
);

//alerts and flash messages
app.use(flash())

//Global variables

//Routes

app.use(require('./routes/index.routes'));
app.use(require('./routes/user.routes'));
app.use(require('./routes/pacientes.routes'));
app.use(require('./routes/getData.routes'));
//static files

app.use(express.static(path.join(__dirname,'public')));

module.exports=app;