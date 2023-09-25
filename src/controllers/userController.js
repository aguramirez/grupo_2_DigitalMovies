const {validationResult}= require('express-validator');
const controller = {
    register: (req, res)=>{
        res.render('register');
    },
    
    processRegister: (req, res)=>{
        let resultValidation= validationResult(req);
        if (resultValidation.errors.length > 0){
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        return res.send('no hay errores de validacion')
    },

    login: (req, res)=> {
        res.render('login')
    },

    profile: (req, res)=>{
        //res.render('profile') FALTA CREAR LA VISTA QUE MOSTRARA EL PERFIL DEL USUARIO
    }
}
module.exports = controller