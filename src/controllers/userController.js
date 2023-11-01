const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const usuariosFilePath = path.join(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

const db = require("../../database/models");
const sequelize = db.Sequelize;


const controller = {
    register: (req, res) => {
        res.render('register.ejs');
    },

    // processRegister: (req, res) => {
    //     let resultValidation = validationResult(req);
    //     if (resultValidation.errors.length > 0) {
    //         return res.render('register', {
    //             errors: resultValidation.mapped(),
    //             oldData: req.body
    //         });
    //     } else {
    //         const data = req.body;

    //         const nuevoUsuario = {
    //             id: usuarios[usuarios.length - 1].id + 1,
    //             usuario: data.usuario,
    //             email: data.email,
    //             foto: data.foto,
    //             password: bcrypt.hashSync(data.contrasena),
    //             foto: req.file ? path.join('/images/avatars/', req.file.filename) : "/images/avatars/avatar-default.jpg"
    //         }
    //         usuarios.push(nuevoUsuario);

    //         fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, " "));

    //         res.render('listaUsuarios.ejs', { usuarios: usuarios })

    //         // res.redirect("/")
    //     }
    // },
    processRegister: (req, res) => {
        let resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {
            const data = req.body;
            db.Usuario.create({
                usuario: data.usuario,
                email: data.email,
                foto: data.foto,
                password: bcrypt.hashSync(data.contrasena),
                foto: req.file ? path.join('/images/avatars/', req.file.filename) : "/images/avatars/avatar-default.jpg"
            })

            res.redirect('/user/users-list')
        }
    },

    // listarUsuarios: (req, res) => {
    //     const usuariosFilePath = path.join(__dirname, '../data/users.json');
    //     const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
    //     res.render('listaUsuarios.ejs', { usuarios: usuarios })
    // },
    listarUsuarios: (req, res) => {
        db.Usuario.findAll()
        .then(usuarios => {
            res.render('listaUsuarios', {usuarios})
        })
    },

    // verUsuario: (req, res) => {
    //     const id = req.params.id;
    //     const usuarioId = usuarios.find(usuario => {
    //         return usuario.id == id;
    //     });

    //     res.render('userProfile', { usuario: usuarioId })
    // },
    verUsuario: (req, res) => {
        db.Usuario.findByPk(req.params.id)
        .then(usuario => {
            res.render('userProfile', { usuario })
        })
    },

    login: (req, res) => {
        res.render('login.ejs')
    },

    // processLogin: (req, res) => {
    //     let resultValidation = validationResult(req);
    //     if (resultValidation.errors.length > 0) {
    //         return res.render('login', {
    //             errors: resultValidation.mapped(),
    //             oldData: req.body
    //         });
    //     } else {
    //         const usuariosFilePath = path.join(__dirname, '../data/users.json');
    //         const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

    //         const usuarioEncontrado = usuarios.find(u => u.email == req.body.email);
    //         // console.log(usuarioEncontrado);
    //         // console.log(req.body.contrasena);
    //         if (usuarioEncontrado != undefined && bcrypt.compareSync(req.body.contrasena, usuarioEncontrado?.password)){
    //             req.session.usuarioLogeado = usuarioEncontrado?.usuario;
    //             res.send("Sesion iniciada " + req.session.usuarioLogeado);
    //         }else{
    //             res.render('login', {errors: [
    //                 {msg: "Credenciales invalidas"}
    //             ]});
    //         }

    //         if(req.body.recuerdame != undefined){
    //             res.cookie('recuerdame', usuarioEncontrado?.email, {maxAge: 360000})
    //         }
    //     }
    // },
    processLogin: (req, res) => {
        let resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('login', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {

            const usuarioEncontrado = db.Usuario.findOne({
                where: {
                    email: req.body.email
                }
            })
            
            if (usuarioEncontrado != undefined && bcrypt.compareSync(req.body.contrasena, usuarioEncontrado?.password)){
                req.session.usuarioLogeado = usuarioEncontrado?.usuario;
                res.redirect("/");
            }else{
                res.render('login', {errors: [
                    {msg: "Credenciales invalidas"}
                ]});
            }

            if(req.body.recuerdame != undefined){
                res.cookie('recuerdame', usuarioEncontrado?.email, {maxAge: 360000})
            }
        }
    },

    // borrarUsuario: (req, res) => {
    //     const id = req.params.id;

    //     const usuariosFilePath = path.join(__dirname, '../data/users.json');
    //     const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

    //     let usuariosFiltrados = usuarios.filter(usuario => {
    //         return usuario.id != id
    //     })

    //     fs.writeFileSync(usuariosFilePath, JSON.stringify(usuariosFiltrados, null, " "));

    //     res.render('listaUsuarios.ejs', { usuarios: usuariosFiltrados })
    // },
    borrarUsuario: (req, res) => {
        db.Usuario.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/user/users-list')
    }
}
module.exports = controller