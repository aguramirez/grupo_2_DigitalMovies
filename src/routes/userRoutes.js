const express = require ('express');
const router = express.Router();

const userController = require('../controllers/userController');
const uploadFile = require('../middlewares/multerRegisterMiddleware');
const validationsRegister = require('../middlewares/validateRegisterMiddleware');

router.get('/users-list', userController.listarUsuarios);


router.get('/register', userController.register);
router.post('/register', uploadFile.single('foto'),validationsRegister,userController.processRegister);

router.get('/login', userController.login);

router.get('/:id', userController.verUsuario);

router.delete('/delete/:id', userController.borrarUsuario);

module.exports= router;