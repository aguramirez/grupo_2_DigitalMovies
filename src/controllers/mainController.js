const fs =require ('fs');
const path = require('path');
const db = require("../../database/models");
const sequelize = db.Sequelize;

//const peliculasFilePath= path.join(__dirname,'../data/dataPeliculas.json');

const controller = {
    estrenos: (req, res)=>{
        db.Pelicula.findAll({
            where: {
                anio: {[sequelize.Op.eq ]: 2023}
            }
        })
            .then((peliculas)=> {
                res.render('home',{peliculas})
            })
    },
    /*home: (req, res) => {
        const peliculas = JSON.parse(fs.readFileSync(peliculasFilePath,'utf-8'))
        res.render('home',{peliculas : peliculas});
    },*/
    productCart: (req, res) => {
        res.render('productCart');
    },
    /*productDetail: (req, res) => {

        res.render('productDetail');
    },*/
    /*login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },*/
    addProduct: (req, res) => {
        res.render('cargaProductos');
    }
};
module.exports = controller;