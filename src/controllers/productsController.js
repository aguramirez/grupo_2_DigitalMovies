const fs = require ('fs');
const path =require ('path');

const peliculasFilePath= path.join(__dirname,'../data/dataPeliculas.json');
const peliculas = JSON.parse(fs.readFileSync(peliculasFilePath,'utf-8'));

const controller = {
    home: (req, res)=>{

    },
    detail: (req, res)=>{
         
		const peliculas = JSON.parse(fs.readFileSync(peliculasFilePath,'utf-8'));
		
        const id = req.params.id;
        const peliculaId  = peliculas.find(pelicula=>{
            return pelicula.id == id;
        });
		// console.log(peliculaId)
        res.render('productDetail', {pelicula: peliculaId})
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

		fs.writeFileSync(peliculasFilePath, JSON.stringify(peliculas, null, " "));
		res.redirect("/")
	},
	edit: (req, res) => {
		const peliculas = JSON.parse(fs.readFileSync(peliculasFilePath, 'utf-8'));

		let id = req.params.id;
		let peliAEditar = peliculas.find(pelicula =>{
			return pelicula.id == id	
		});

		res.render('editarProductos', {pelicula: peliAEditar})
	},
	putEdit: (req, res) => {

		const data = req.body;
		const peliculas = JSON.parse(fs.readFileSync(peliculasFilePath, 'utf-8'));

		let peliAEditar = peliculas.find(product => {
			return req.params.id == product.id
		});

		let peliEditada = {
			id: req.params.id,
			titulo: data.titulo,
			description: data.description,
			// imagen: data.imagen,
			trailer: data.trailer,
			anio: data.anio,
            categoria: data.categoria,
			imagen: req.file ? path.join('/images/', req.file.filename) : peliAEditar.imagen,
		}

		let indice = peliculas.findIndex(pelicula => {
			return pelicula.id == req.params.id
		});

		peliculas[indice] = peliEditada;

		fs.writeFileSync(peliculasFilePath, JSON.stringify(peliculas, null, " "));
		res.redirect("/");
	},
	delete : (req, res) => {
		const id = req.params.id;

		const peliculas = JSON.parse(fs.readFileSync(peliculasFilePath, 'utf-8'));

		let peliculasFiltradas = peliculas.filter(pelicula => {
			return pelicula.id != id
		})

		fs.writeFileSync(peliculasFilePath, JSON.stringify(peliculasFiltradas, null, " "));

		res.redirect("/")
	}

}

module.exports = controller;