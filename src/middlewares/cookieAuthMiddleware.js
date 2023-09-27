const path = require('path');
const fs = require('fs');

const cookieAuthMiddleware = (req, res, next) => {
    next();

    if (req.cookies.recuerdame != undefined && req.session.usuarioLogeado) {
        const usuariosFilePath = path.join(__dirname, '../data/users.json');
        const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

        const usuarioEncontrado = usuarios.find(u => u.email == req.cookies.recuerdame);

        req.session.usuarioLogeado = usuarioEncontrado;
    }
}
module.exports = cookieAuthMiddleware;