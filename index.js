const express = require('express');
const app = express();

const conversorMoedas = require('./services/service');

app.get('/conversor', (req, res) => {
    let USD = parseFloat(req.query.USD);
    let BRL = conversorMoedas.converteParaReal(USD);

    res.json({Real : BRL});
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado em: ' + data);
});