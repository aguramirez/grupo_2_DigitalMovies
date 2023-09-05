const path = require('path')
const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');

app.use(express.static('public'));

//para que funcione el post en los form
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/', mainRoutes);
app.use('/products', productsRoutes);

app.listen(3030, () => console.log('Servidor abierto'));