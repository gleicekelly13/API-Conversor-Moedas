function conversaoMoeda(moeda, valor) {
    let resultado;

    if(moeda === 'US$') {
        resultado = converteRealParaDolar(valor);
    } else if (moeda === 'R$') {
        resultado = converteDolarParaReal(valor); 
    } else if (moeda === '€') {
        resultado = converteEuroParaReal(valor);
    }  else if (moeda === 'R€') {
        resultado = converteRealParaEuro(valor);
    } else if (moeda === '£') {
        resultado = converteLibraParaReal(valor);
    } else if (moeda === 'R£') {
        resultado = converteRealParaLibra(valor);
    } else if (moeda === 'P$') {
        resultado = convertePesoParaReal(valor);
    } else if (moeda === 'RP') {
        resultado = converteRealParaPeso(valor);
    }


    return resultado;
}

function converteDolarParaReal (USD) {
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

function converteRealParaLibra(BRL) {
    let GBP = BRL * 0.16;
    return GBP;
}

function convertePesoParaReal (ARS) {
    let BRL = ARS * 0.0058;
    return BRL;
}

function converteRealParaPeso (BRL) {
    let ARS = BRL * 172.64;
    return ARS;
}

exports.conversaoMoeda = conversaoMoeda;