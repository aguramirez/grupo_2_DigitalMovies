const db = require("../../database/models");
const sequelize = db.Sequelize;
const path = require('path');

/*const Pelicula = db.Pelicula;
const Categoria = db.Categoria;*/

const peliculasController = {
    list: (req, res) => {
        db.Pelicula.findAll({
            include: 'categoria'
        })
            .then(function (peliculas) {
                res.render('home',{peliculas})
            })        
    },
    detail: (req, res)=> {
        db.Pelicula.findByPk(req.params.id, {include :'categoria'})
            .then((pelicula)=>{
                res.render('productDetail', {pelicula:pelicula});
            })

    },
    crear: (req, res) => {
        db.Categoria.findAll()
        
        .then((categorias)=>{
            res.render('cargaProductos', {categorias})
        })
        
    },
    procesoCrear: (req, res) => {
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
       
    },
    editar: (req, res) => {
        let pedidoPelicula= db.Pelicula.findByPk(req.params.id);
        let pedidoCategoria= db.Categoria.findAll();
        Promise.all([pedidoPelicula, pedidoCategoria])
        .then(([pelicula, categoria]) =>{
            res.render('editarProductos', {pelicula: pelicula, categorias: categoria})
        })
    },
    processoEditar: (req, res)=> {
        db.Pelicula.update({
            titulo: req.body.titulo,
            trailer: req.body.trailer,
            anio: req.body.anio,
            descripcion: req.body.descripcion,
            imagen: req.file ? path.join('/images/', req.file.filename) : req.body.imagen,
            categoria_id: req.body.categoria
            
        }, {
            where : {
                id: req.params.id
            }
        }
        )
        
          res.redirect('/edit/' + req.params.id);
    },
    borrar : (req,res)=>{
        db.Pelicula.destroy({
            where : {
                id: req.params.id
            }
        })
        res.redirect('/')
    }

}

module.exports = peliculasController;