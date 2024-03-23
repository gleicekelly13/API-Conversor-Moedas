const express = require('express');
const app = express();

const conversorMoedas = require('./services/service');

app.get('/conversor', (req, res) => {
    let moeda = req.query.moeda;
    let valor = parseFloat(req.query.valor);
    let moedaConvertida = conversorMoedas.conversaoMoeda(moeda, valor);

    if(moedaConvertida) {
        res.json({valorConversao : moedaConvertida.toFixed(2)});
    } else if (isNaN(parseFloat(req.query.valor)) || isNaN(parseFloat(req.query.moeda)) ) {
        res.status(400).json({'Erro' : 'Requisição inválida!'});
    }
    
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado em: ' + data);
});