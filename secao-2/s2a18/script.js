/**
 * Arquivo: script.js
 * Descrição: arquivo responsável por tratar a lógica na parte do script de
 * um componente Vue.
 * Data: 07/11/2018
 * Author: Glaucia Lemos
 */

new Vue({
    el: '#app',
    data: {
        contador: 0,
        x: 0,
        y: 0
    },
    methods: {
        incrementar: function(pular, event) {
            this.contador += pular;
        },
        atualizarCoordenadas: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});
