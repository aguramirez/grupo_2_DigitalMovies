const db = require("../../database/models");
const sequelize = db.sequelize;

const Pelicula = db.Pelicula;
const Categoria = db.Categoria;

const peliculasController = {
    list: (req, res) => {
        db.Pelicula.findAll({
            include: 'categoria'
        })
            .then(function (peliculas) {
                res.render("home", { peliculas: peliculas })
            })        
    },
    add: (req, res) => {

    },
    create: (req, res) => {

    },
    delete: (req, res) => {

    }
}

module.exports = peliculasController;