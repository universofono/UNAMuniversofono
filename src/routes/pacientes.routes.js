const {Router} = require('express');
const router = Router();
const {body} = require('express-validator')
const { 
    newPaciente,
    addNuevoPaciente,
    renderListExpediente,
} = require('../controllers/userController');

router.get('/pacientes/nuevoPaciente',newPaciente);
router.get('/pacientes/listExpediente',renderListExpediente); 

router.post(
    '/pacientes/nuevoPaciente',
    [
        body("nombre","Ingrese un nombre válido").notEmpty(),
        body("apellidos","Ingrese un apellido válido").notEmpty(),
        body("fechaNac","Ingrese una fecha válida").notEmpty().isDate("DD/MM/YYYY"),
        body("genero").notEmpty(),
        body("edad","Ingresa una edad válida").isNumeric().notEmpty(),
        body("telefono","Ingrese un teléfono válido").isLength({min:10,max:10}).notEmpty(),
        body("email","Ingrese un email valido").isEmail().normalizeEmail(),
        body("clave","Ingrese una clave válida").notEmpty().isNumeric(),
        body("expediente","Ingrese una expediente válida").notEmpty().isNumeric(),
        body("diagnostico","Ingrese un diagnóstico válido").notEmpty()
    ],addNuevoPaciente);
module.exports=router;  