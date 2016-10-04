;(function () {

    'use strict';

    var Calculadora = (function () {

        function getValorPorId (id) {
            // pega o elemento do DOM e o seu respectivo valor
            var valor = document.getElementById(id).value;

            // converte o valor para número
            return Number(valor);
        };

        function getPrimeiroValor () {
            // chama a função getValorPorId passando o id e retornando seu valor
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

        function eventoClick () {
            // buttons como NodeList
            var buttonsNodeList = document.querySelectorAll('.operador');

            // converte a NodeList para Array
            var buttonsArray = Array.from(buttonsNodeList);

            // itera a lista de buttons
            buttonsArray.forEach(function (button) {

                // adicionar evento de click em cada button da iteração
                button.addEventListener('click', function (e) {
                    // Cancela o evento se for cancelável, sem parar a propagação do mesmo.
                    // https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault
                    e.preventDefault();

                    // this é o elemento que foi realizado o evento
                    var operando = this.innerHTML;

                    realizarOperacao(operando);
                });
            });
        };

        return {
            init: function () {
                eventoClick();
            }
        }

    })();

    Calculadora.init();

})();
