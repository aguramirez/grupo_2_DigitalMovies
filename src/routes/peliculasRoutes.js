const express = require('express');
const router = express.Router();
const peliculasController = require("../controllers/peliculasController")

router.get('/', peliculasController.list);

router.get('/agregar',peliculasController.crear)
router.post('/agregar',peliculasController.procesoCrear)

router.get('/editar', peliculasController.editar)

/*router.get('/estrenos', peliculasController.new)*/

router.get('/:id', peliculasController.detail)



module.exports = router;