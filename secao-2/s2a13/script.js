/**
 * Arquivo: script.js
 * Descrição: arquivo responsável por tratar a lógica na parte do script de
 * um componente Vue.
 * Data: 04/11/2018
 * Author: Glaucia Lemos
 */

new Vue({
    el: '#app',
    data: {
        title: 'Olá Pessoal!',
        link: 'https://www.google.com/',
        linkCompleto: `<a href="https://www.google.com/">Google</a>`

    },
    methods: {
        cumprimentar: function() {
            return this.title;
        }
    }
});