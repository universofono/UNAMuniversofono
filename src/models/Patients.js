const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
// Para getData
const express = require('express');
const session = require('express-session')
const flash=require('connect-flash')
const path = require('path')
const exphbs=require('express-handlebars')
const ejs = require('ejs');



//initialitation
const app=express();


const Paciente=new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    apellidos:{
        type:String,
        required:true
    },
    fechaNac:{
        type:String,
        required:true,
    },
    genero:{
        type:String,
        required:true,
    }, 
    edad:{
        type:Number,
        required:true,
    }, 
    telefono:{
        type:Number,
        required:true,
    }, 
    email:{
        type:String,
        required:true,
    }, 
    clave:{
        type:Number,
        required:true,
    }, 
    expediente:{
        type:Number,
        required:true,
    }, 
    diagnostico:{
        type:String,
        required:true,
    }
    },
    {
        timestamps:true,
    }
);

module.exports=mongoose.model('patients',Paciente);
