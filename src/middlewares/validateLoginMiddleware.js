const {body} = require('express-validator')

const validationsLogin = [
    body('contrasena').notEmpty().withMessage('Password incorrecta'),
    body('email').notEmpty().withMessage('Tienes que escribir un email').bail()
        .isEmail().withMessage('Ingresa un formato de email válido')
]
module.exports = validationsLogin;