/**
 * Arquivo: script.js
 * Descrição: arquivo responsável por tratar a lógica na parte do script de
 * um componente Vue.
 * Data: 03/12/2018
 * Author: Glaucia Lemos
 */

new Vue({
    el: '#app',
    data: {
        contador: 0,
        segundoContador: 0
    },
    computed: {
        saida: function() {
            console.log("Computed");
            return this.contador > 5 ? 'Maior do que 5' : 'Menor do que 5';
        }
    },
    methods: {
        resultado: function() {
            console.log("Method")
            return this.console > 5 ? 'Maior do que 5' : 'Menor do que 5';
        }
    }
});
