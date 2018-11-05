/**
 * Arquivo: script.js
 * Descrição: arquivo responsável por tratar a lógica na parte do script de
 * um componente Vue.
 * Data: 05/11/2018
 * Author: Glaucia Lemos
 */

new Vue({
    el: '#app',
    data: {
        contador: 0
    },
    methods: {
        incrementar: function() {
            this.contador++;
        }
    }
});
