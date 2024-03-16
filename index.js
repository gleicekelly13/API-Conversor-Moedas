const express = require('express');
const app = express();

const conversorMoedas = require('./services/service');

app.get('/conversor', (req, res) => {
    let moeda = req.query.moeda;
    let valor = req.query.valor;
    let moedaConvertida = conversorMoedas.conversaoMoeda(moeda, valor);

    res.json({valorConversao : moedaConvertida});
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado em: ' + data);
});