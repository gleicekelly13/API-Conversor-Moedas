function conversaoMoeda(moeda, valor) {
    let resultado;

    if(moeda === 'US$') {
        resultado = converteRealParaDolar(valor);
    } else if (moeda === 'R$') {
        resultado = converteParaReal(valor); 
    } else if (moeda === '€') {
        resultado = converteEuroParaReal(valor);
    }  else if (moeda === 'R€') {
        resultado = converteRealParaEuro(valor);
    } else if (moeda === '£') {
        resultado = converteLibraParaReal(valor);
    }


    return resultado;
}

function converteParaReal (USD) {
    let BRL = USD * 5.00;
    return BRL;
};

function converteRealParaDolar (BRL) {
    let USD = BRL * 0.20;
    return USD;
}

function converteEuroParaReal (EUR) {
    let BRL = EUR * 5.40;
    return BRL;
}

function converteRealParaEuro (BRL) {
    let EUR = BRL * 0.19;
    return EUR; 
}

function converteLibraParaReal (GBP) {
    let BRL = GBP * 6.30;
    return BRL;
}

exports.conversaoMoeda = conversaoMoeda;