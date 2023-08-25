const path = require('path');

const controller = {
    home: (req, res) => {
        res.render('home');
    },
    productCart: (req, res) => {
        res.render('productCart');
    },
    productDetail: (req, res) => {
        res.render('productDetail');
    },
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
    addProduct: (req, res) => {
        res.render('cargaProductos');
    }
};
module.exports = controller;