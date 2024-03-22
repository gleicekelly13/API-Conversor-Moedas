function conversaoMoeda(moeda, valor) {
    let resultado;

    if(moeda === 'US$') {
        resultado = converteParaDolar(valor);
    } else if (moeda === 'R$') {
        resultado = converteParaReal(valor); 
    } else if (moeda === '€') {
        resultado = converteEuroParaReal(valor);
    }


    return resultado;
}

function converteParaReal (USD) {
    let BRL = USD * 5.00;
    return BRL;
};

function converteParaDolar (BRL) {
    let USD = BRL * 0.20;
    return USD;
}

function converteEuroParaReal (EUR) {
    let BRL = EUR * 5.40;
    return BRL;
}

exports.conversaoMoeda = conversaoMoeda;