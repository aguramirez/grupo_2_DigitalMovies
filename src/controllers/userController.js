const {validationResult} = require('express-validator')
const controller = {
    register : (req, res)=>{
       res.render('register');
    },
    processRegister : (req, res)=>{
        res.send({
            body: req.body,
            file: req.file
        });
    },
    login: (req, res)=>{
        res.render('login');
    }
}

module.exports= controller;