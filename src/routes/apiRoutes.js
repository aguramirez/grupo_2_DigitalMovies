const express = require('express');
const router = express.Router();
const apiUserController = require("../controllers/apiUserController")
const apiPeliculasController = require("../controllers/apiPeliculasController")

router.get('/users', apiUserController.listarUsuarios)
router.get('/users/:id', apiUserController.verUsuario)

router.get('/products', apiPeliculasController.list)
router.get('/products/:id', apiPeliculasController.detail)

module.exports = router;