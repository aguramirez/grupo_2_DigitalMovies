const fs = require ('fs');
const path =require ('path');

const peliculasFilePath= path.join(__dirname,'../data/dataPeliculas.json');

const controller = {
    home: (req, res)=>{

    },
    detail: (req, res)=>{
        const peliculas = JSON.parse(fs.readFileSync(peliculasFilePath,'utf-8')) 
        const id = req.params.id;
        const peliculaId  = peliculas.find(pelicula=>{
            return pelicula.id == id;
        })
        res.render('productDetail', {pelicula : peliculaId})
    }
}

module.exports = controller;