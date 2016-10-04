;(function () {

    'use strict';

    var Calculadora = (function () {

        // funções privadas do módulo

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

        // todas as funções públicas do módulo
        return {
            adicionar: function () {
                realizarOperacao('+');
                return false;
            },

            subtrair: function () {
                realizarOperacao('-');
                return false;
            },

            multiplicar: function () {
                realizarOperacao('*');
                return false;
            },

            dividir: function () {
                realizarOperacao('/');
                return false;
            },
        }

    })();

    // precisamos "expor" o módulo para que ele seja global
    window.Calculadora = Calculadora;

})();
