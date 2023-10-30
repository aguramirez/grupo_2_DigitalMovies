const express = require('express');
const router = express.Router();
const peliculasController = require("../controllers/peliculasController")

// pagina principal con estrenos

//router.get('/', peliculasController.estrenos)

// listado

router.get('/', peliculasController.list);

// creacion y guardado

router.get('/agregar',peliculasController.crear)
router.post('/agregar',peliculasController.procesoCrear)

// detalle

router.get('/:id', peliculasController.detail)

// editar y guardar

router.get('/edit/:id', peliculasController.editar)
router.post('/edit/:id', peliculasController.processoEditar)

// borrado

router.post('/borrar/:id', peliculasController.borrar)







module.exports = router;