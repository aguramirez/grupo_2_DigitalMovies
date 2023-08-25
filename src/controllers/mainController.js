const path = require('path');

const controller = {
    home: (req, res) => {
        return res.render(path.join(__dirname, '../views', 'home'));
    },
    productCart: (req, res) => {
        return res.render(path.join(__dirname, '../views', 'productCart'));
    },
    productDetail: (req, res) => {
        return res.render(path.join(__dirname, '../views', 'productDetail'));
    },
    login: (req, res) => {
        return res.render(path.join(__dirname, '../views', 'login'));
    },
    register: (req, res) => {
        return res.render(path.join(__dirname, '../views', 'register'));
    },
    addProduct: (req, res) => {
        return res.render(path.join(__dirname, '../views', 'cargaProductos'));
    }
}

module.exports = controller;