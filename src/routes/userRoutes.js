const express = require ('express');
const router = express.Router();

const userController = require('../controllers/userController');
const uploadFile = require('../middlewares/multerRegisterMiddleware');
const validationsRegister = require('../middlewares/validateRegisterMiddleware');
const validationsLogin = require('../middlewares/validateLoginMiddleware');

router.get('/users-list', userController.listarUsuarios);


router.get('/register', userController.register);
router.post('/register', uploadFile.single('foto'),validationsRegister,userController.processRegister);

router.get('/login', userController.login);
router.post('/login',validationsLogin, userController.processLogin);

router.get('/:id', userController.verUsuario);

router.delete('/delete/:id', userController.borrarUsuario);

module.exports= router;