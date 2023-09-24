const express = require ('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const {body} = require('express-validator')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/avatars'))
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, "avatar-" + Date.now() + path.extname(file.originalname))
    },
});

const uploadFile = multer({storage: storage});

const userController = require('../controllers/userController');

router.get('/register', userController.register);

router.post('/register', uploadFile.single('foto'),userController.processRegister);

router.get('/login', userController.login);

module.exports= router;