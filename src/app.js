const path = require('path')
const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainRoutes');
// const productsRoutes = require('./routes/productsRoutes');
const peliculasRoutes = require('./routes/peliculasRoutes')
const userRoutes= require ('./routes/userRoutes')
const apiRoutes = require ('./routes/apiRoutes')
const cookieAuthMiddleware = require('./middlewares/cookieAuthMiddleware');

const methodOverride = require('method-override'); // Para poder usar PUT y DELETE
const session = require('express-session');
const cookieParser = require('cookie-parser');

const cors = require('cors');
app.use(cors());

app.use(express.static('public'));

//para que funcione el post en los form
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method')); // Para poder usar PUT y DELETE
app.use(session({secret: "DigitalMoviesSecret"}));
app.use(cookieParser());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/estrenos', mainRoutes);
// app.use('/products', productsRoutes);
app.use('/user', userRoutes);
app.use(cookieAuthMiddleware);

// CRUD nuevo
app.use('/', peliculasRoutes);

// react
app.use('/api', apiRoutes);

app.listen(3030, () => console.log('Servidor abierto'));