;(function () {

    'use strict';

    function getValorPorId (id) {
        var valor = document.getElementById(id).value;
        return Number(valor);
    };

    function getPrimeiroValor () {
        return getValorPorId('primeiro-valor');
    };

    function getSegundoValor () {
        return getValorPorId('segundo-valor');
    };

    function setResultado (resultado) {
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
        realizarOperacao('+');
        return false;
    };

    function subtrair () {
        realizarOperacao('-');
        return false;
    };

    function multiplicar () {
        realizarOperacao('*');
        return false;
    };

    function dividir () {
        realizarOperacao('/');
        return false;
    };

    // precisamos "expor" todas as funções que queremos que sejam globais
    window.adicionar = adicionar;
    window.subtrair = subtrair;
    window.multiplicar = multiplicar;
    window.dividir = dividir;

})();
