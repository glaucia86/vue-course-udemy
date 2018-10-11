/**
 * Arquivo: script.js
 * Descrição: arquivo responsável por tratar a lógica na parte do script de
 * um componente Vue.
 * Data: 11/10/2018
 * Author: Glaucia Lemos
 */

new Vue({
    el: '#app',
    data: {
        title: 'Olá Pessoal!',
        link: 'https://www.google.com/'
    },
    methods: {
        cumprimentar: function() {
            return this.title;
        }
    }
});