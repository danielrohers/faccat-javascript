'use strict';

function getValorPorId (id) {
    // pega o elemento do DOM e o seu respectivo valor
    var valor = document.getElementById(id).value;

    // converte o valor para número
    return Number(valor);
};

function getPrimeiroValor () {
    // chama a função getValorPorId passando o id e retornando o seu valor
    return getValorPorId('primeiro-valor');
};

function getSegundoValor () {
    // chama a função getValorPorId passando o id e retornando o seu valor
    return getValorPorId('segundo-valor');
};

function setResultado (resultado) {
    // adiciona o valor da variável "resultado" no elemento do DOM resultado
    document.getElementById('resultado').innerHTML = resultado;
};

function realizarOperacao (operacao) {
    var primeiroValor = getPrimeiroValor();
    var segundoValor = getSegundoValor();
    var resultado;
    switch (operacao) {
        case '+':
            resultado = primeiroValor + segundoValor;
            break;
        case '-':
            resultado = primeiroValor - segundoValor;
            break;
        case '*':
            resultado = primeiroValor * segundoValor;
            break;
        case '/':
            resultado = primeiroValor / segundoValor;
            break;
    }
    setResultado(resultado);
};

function adicionar () {
    var primeiroValor = getPrimeiroValor();
    var segundoValor = getSegundoValor();
    var resultado = primeiroValor + segundoValor;
    setResultado(resultado);
    return false;
};

function subtrair () {
    var resultado = getPrimeiroValor() - getSegundoValor();
    setResultado(resultado);
    return false;
};

function multiplicar () {
    setResultado(getPrimeiroValor() * getSegundoValor());
    return false;
};

function dividir () {
    realizarOperacao('/');
    return false;
};
