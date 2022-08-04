const mongoose=require('mongoose');
const DATABASE=process.env.DATABASE;


//const Schema = require('J:/Servicio Social/Servicio Social/Git/servicioss/src/models/nuevosPacientes')

mongoose.connect(DATABASE,{
    useNewUrlParser:true,
})
    .then(db=>console.log('db is connected'))
    .catch(err=> console.error(err)); 