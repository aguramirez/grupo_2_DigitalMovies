const {body} = require('express-validator')

const validationsRegister = [
    body('usuario').notEmpty().withMessage('Debes completar con un nombre de usuario').bail()
        .isLength({min:5}).withMessage('El nombre de Usuario debe tener al menos 5 caracteres'),
    body('contrasena').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('confirmarContrasena').notEmpty().withMessage('Debes confirmar tu contraseña'),
    body('email').notEmpty().withMessage('Tienes que escribir un email').bail()
        .isEmail().withMessage('Ingresa un formato de email válido'),
    body('confirmarEmail').notEmpty().withMessage('Debes confirmar el email').bail()
        .isEmail().withMessage('Ingresa un formato de email válido'),
    body('fechaNacimiento').notEmpty().withMessage('Debes colocar tu fecha de nacimiento'),
    // body('foto').custom((value, {req})=>{
    //     let file= req.file;
    //     if(!file){
    //         throw new Error ('Debes subir una imagen');
    //     }
    //     return true // no borrar
    // })
]
module.exports = validationsRegister;