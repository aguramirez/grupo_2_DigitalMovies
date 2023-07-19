const path = require('path')
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3030, () => console.log('Servidor abierto'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});