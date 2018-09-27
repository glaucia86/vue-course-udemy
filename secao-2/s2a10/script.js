/**
 * Arquivo: script.js
 * Descrição: arquivo responsável por tratar a lógica na parte do script de
 * um componente Vue.
 * Data: 27/09/2018
 * Author: Glaucia Lemos
 */

new Vue({
    el: '#app',
    data: {
        title: 'Olá Mundo!'
    },
    methods: {
        cumprimentar: function () {
            return 'Olá Mundo!!!';
        }
    }
});