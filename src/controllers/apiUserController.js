const db = require("../../database/models");

const controller = {
    listarUsuarios: (req, res) => {
        db.Usuario.findAll()
        .then(usuarios => {
            res.json(usuarios);
        })
    },
    verUsuario: (req, res) => {
        db.Usuario.findByPk(req.params.id)
        .then(usuario => {
            res.json(usuario)
        })
    }
}
module.exports = controller