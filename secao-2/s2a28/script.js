/**
 * Arquivo: script.js
 * Descrição: arquivo responsável por tratar a lógica na parte do script de
 * um componente Vue.
 * Data: 04/12/2018
 * Author: Glaucia Lemos
 */

new Vue({
    el: "#app",
    data: {
        colorirVermelhor: false,
        cor: 'verde'
    },
    computed: {
        divClasses: function() {
            return {
                vermelho: this.colorirVermelhor,
                azul: !this.colorirVermelhor
            };
        }
    }
});