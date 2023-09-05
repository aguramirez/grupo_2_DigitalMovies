const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/'))
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, "pelicula-" + Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({storage: storage});

const productsController = require('../controllers/productsController');

router.get('/detail/:id/', productsController.detail)
router.get('/create', productsController.create);
router.post('/create', upload.single("imagen"), productsController.postCreate);

module.exports= router;