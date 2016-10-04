$(document).ready(function () {

    'use strict';

    var Calculadora = (function () {

        function getValorPorId (id) {
            var valor = $('#'+id).val();
            return Number(valor);
        };

        function getPrimeiroValor () {
            return getValorPorId('primeiro-valor');
        };

        function getSegundoValor () {
            return getValorPorId('segundo-valor');
        };

        function setResultado (resultado) {
            $('#resultado').html(resultado);
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

        function eventoClick () {
            $('.operador').on('click', function (e) {
                e.preventDefault();
                var operando = this.innerHTML;
                realizarOperacao(operando);
            });
        };

        return {
            init: function () {
                eventoClick();
            }
        }

    })();

    Calculadora.init();

});
