const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const usuariosFilePath = path.join(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));


const controller = {
    register: (req, res) => {
        res.render('register.ejs');
    },

    processRegister: (req, res) => {
        let resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {
            const data = req.body;

            const nuevoUsuario = {
                id: usuarios[usuarios.length - 1].id + 1,
                usuario: data.usuario,
                email: data.email,
                foto: data.foto,
                password: data.contrasena,
                foto: req.file ? path.join('/images/avatars/', req.file.filename) : "/images/avatars/avatar-default.jpg"
            }
            usuarios.push(nuevoUsuario);

            fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, " "));

            res.render('listaUsuarios.ejs', { usuarios: usuarios })

            // res.redirect("/")
        }
    },

    listarUsuarios: (req, res) => {
        const usuariosFilePath = path.join(__dirname, '../data/users.json');
        const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
        res.render('listaUsuarios.ejs', { usuarios: usuarios })
    },

    verUsuario: (req, res) => {
        const id = req.params.id;
        const usuarioId = usuarios.find(usuario => {
            return usuario.id == id;
        });

        res.render('userProfile', { usuario: usuarioId })
    },

    login: (req, res) => {
        res.render('login.ejs')
    },

    borrarUsuario: (req, res) => {
        const id = req.params.id;

        const usuariosFilePath = path.join(__dirname, '../data/users.json');
        const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

        let usuariosFiltrados = usuarios.filter(usuario => {
            return usuario.id != id
        })

        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuariosFiltrados, null, " "));

        res.render('listaUsuarios.ejs', { usuarios: usuariosFiltrados })
    }
}
module.exports = controller