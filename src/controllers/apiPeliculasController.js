const db = require("../../database/models");

const controller = {
    list: (req, res) => {
        db.Pelicula.findAll()
            .then((peliculas) => {
                res.json(peliculas)
            })
    },
    detail: (req, res) => {
        db.Pelicula.findByPk(req.params.id)
            .then((pelicula) => {
                res.json(pelicula);
            })
    }
}
module.exports = controller
