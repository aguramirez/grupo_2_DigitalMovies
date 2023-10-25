const express = require('express');
const router = express.Router();
const peliculasController = require("../controllers/peliculasController")

router.get('/', peliculasController.list);

module.exports = router;