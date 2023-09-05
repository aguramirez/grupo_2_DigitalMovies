const fs = require ('fs');
const path =require ('path');

const peliculasFilePath= path.join(__dirname,'../data/dataPeliculas.json');
const peliculas = JSON.parse(fs.readFileSync(peliculasFilePath,'utf-8'))

const controller = {
    home: (req, res)=>{

    },
    detail: (req, res)=>{
         
        const id = req.params.id;
        const peliculaId  = peliculas.find(pelicula=>{
            return pelicula.id == id;
        })
        res.render('productDetail', {pelicula : peliculaId})
    },

    create: (req, res) => {
		res.render("cargaProductos")
	},

    postCreate: (req, res) => {
		const data = req.body;
		// console.log(data); // nueva peli
		// console.log(req.file); //imagen

		const nuevoProducto = {
			id: peliculas[peliculas.length - 1].id + 1,
			titulo: data.titulo,
			description: data.description,
			imagen: data.imagen,
			trailer: data.trailer,
			anio: data.anio,
            categoria: data.categoria,
			imagen: req.file ? path.join('/images/', req.file.filename) : "/images/default.jpg"
		}
		peliculas.push(nuevoProducto);

		// Escribir el archivo
		fs.writeFileSync(peliculasFilePath, JSON.stringify(peliculas, null, " "));
		res.redirect("/")
	},
}

module.exports = controller;