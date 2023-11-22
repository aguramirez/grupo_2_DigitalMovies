const {check} = require("express-validator")

const validationFormBackEndAddPeli = [
    check('titulo')
    .not()
    .isEmpty()
    .withMessage("Ingrese un titulo")
    .isLength({min:5})
    .withMessage('El titulo debe tener al menos 5 caracteres'),

    check('descripcion')
    .isLength({min:20})
    .withMessage('La descripcion debe tener al menos 20 caracteres'),

    check('imagen')
    .custom((value, { req }) => {

        const imagen = req.files.imagen;
        const extension = imagen.name.split('.').pop().toLowerCase();
        const extensionesPermitidas = ['jpg', 'jpeg', 'png', 'gif'];

        if (extensionesPermitidas.indexOf(extension) === -1) {
            throw new Error('La imagen debe ser de tipo JPG, JPEG, PNG o GIF.');
        }

        return true
    })    

]

module.exports = validationFormBackEndAddPeli;