const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/avatars')) // imagen de perfil de los usuarios
    },
    filename: function (req, file, cb) {
        //console.log(file);
        cb(null, "avatar-" + Date.now() + path.extname(file.originalname))
    },
});

const uploadFile = multer({storage: storage});

module.exports = uploadFile;