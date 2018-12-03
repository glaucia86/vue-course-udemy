/**
 * Arquivo: script.js
 * Descrição: arquivo responsável por tratar a lógica na parte do script de
 * um componente Vue.
 * Data: 04/11/2018
 * Author: Glaucia Lemos
 */

new Vue({
    el: '#exercicio',
    data: {
        nome: 'Glaucia Lemos',
        idade: 32,
        imagem: 'https://bit.ly/2NxG8RI'
    },
    methods: {
        numeroRandomico: () => {
            return Math.random()
        },

        multiplicarIdade: function(multiplicar) {
            return this.idade * multiplicar
        }
    }
});