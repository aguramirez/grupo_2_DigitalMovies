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
    Login: (req, res) => {
        return res.render(path.join(__dirname, '../views', 'login'));
    },
    Register: (req, res) => {
        return res.render(path.join(__dirname, '../views', 'register'));
    }
}

module.exports = controller;