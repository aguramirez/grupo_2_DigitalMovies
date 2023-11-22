const express = require('express');
const router = express.Router();
const peliculasController = require("../controllers/peliculasController")
const validationFormBackEndAddPeli = require("../middlewares/cargaProductosValidationBack")

// pagina principal con estrenos

//router.get('/', peliculasController.estrenos)

// listado

router.get('/', peliculasController.list);

// creacion y guardado

router.get('/agregar',peliculasController.crear)
router.post('/agregar',validationFormBackEndAddPeli,peliculasController.procesoCrear)

// detalle

router.get('/:id', peliculasController.detail)

// editar y guardar

router.get('/edit/:id', peliculasController.editar)
router.post('/edit/:id',validationFormBackEndAddPeli, peliculasController.processoEditar)

// borrado

router.post('/borrar/:id', peliculasController.borrar)

// categorias

router.get('/categoria/:id', peliculasController.filtro)







module.exports = router;