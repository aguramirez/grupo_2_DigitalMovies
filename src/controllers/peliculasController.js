const db = require("../../database/models");
const sequelize = db.Sequelize;
const path = require('path');
const { validationResult } = require("express-validator")
/*const Pelicula = db.Pelicula;
const Categoria = db.Categoria;*/

const peliculasController = {
    list: (req, res) => {
        db.Categoria.findAll()
            .then((categorias) => {
                db.Pelicula.findAll({
                    include: 'categoria',
                })
                    .then((peliculas) => {
                        res.render('home', { peliculas, categorias })
                    })
            })

    },
    detail: (req, res) => {
        db.Pelicula.findByPk(req.params.id, { include: 'categoria' })
            .then((pelicula) => {
                res.render('productDetail', { pelicula: pelicula });
            })

    },
    crear: (req, res) => {
        db.Categoria.findAll()

            .then((categorias) => {
                res.render('cargaProductos', { categorias })
            })

    },
    procesoCrear: (req, res) => {
        let errores = validationResult(req)
        if (!errores.isEmpty()) {
            db.Categoria.findAll()

                .then((categorias) => {
                    res.render('cargaProductos', { categorias, errores: errores.array(), oldData: req.body })
                })
        } else {
            db.Pelicula.create({
                titulo: req.body.titulo,
                trailer: req.body.trailer,
                anio: req.body.anio,
                descripcion: req.body.descripcion,
                imagen: req.file ? '/images/' + req.file.filename : "/images/default.jpg",
                categoria_id: req.body.categoria

            })
            res.render('home');
            res.redirect('/');
        }

    },
    editar: (req, res) => {
        let pedidoPelicula = db.Pelicula.findByPk(req.params.id);
        let pedidoCategoria = db.Categoria.findAll();
        Promise.all([pedidoPelicula, pedidoCategoria])
            .then(([pelicula, categoria]) => {
                res.render('editarProductos', { pelicula: pelicula, categorias: categoria })
            })
    },
    processoEditar: (req, res) => {
        let errores = validationResult(req)
        if (!errores.isEmpty()) {
            let pedidoPelicula = db.Pelicula.findByPk(req.params.id);
            let pedidoCategoria = db.Categoria.findAll();
            Promise.all([pedidoPelicula, pedidoCategoria])
                .then(([pelicula, categoria]) => {
                    res.render('editarProductos', { pelicula: pelicula, categorias: categoria, errores: errores.array(), oldData: req.body })
                })
        } else {
            db.Pelicula.update({
                titulo: req.body.titulo,
                trailer: req.body.trailer,
                anio: req.body.anio,
                descripcion: req.body.descripcion,
                imagen: req.file ? path.join('/images/', req.file.filename) : req.body.imagen,
                categoria_id: req.body.categoria

            }, {
                where: {
                    id: req.params.id
                }
            }
            )

            res.render('productDetail', {pelicula: pedidoPelicula});
        }
    },
    borrar: (req, res) => {
        db.Pelicula.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    },
    filtro: (req, res) => {
        const cat_id = req.params.id
        db.Categoria.findAll()
            .then((categorias) => {
                db.Pelicula.findAll({
                    where: {
                        categoria_id: cat_id
                    }
                })
                    .then((peliculas) => {
                        res.render('filtroPeliculas', { peliculas, categorias, cat_id })
                    })
            })

    }

}

module.exports = peliculasController;