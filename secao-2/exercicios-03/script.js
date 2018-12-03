/**
 * Arquivo: script.js
 * Descrição: arquivo responsável por tratar a lógica na parte do script de
 * um componente Vue.
 * Data: 03/12/2018
 * Author: Glaucia Lemos
 */

new Vue({
    el: '#exercicio',
    data: {
        valor: 0
    },
    computed: {
        resultado: function() {
            return this.valor == 37 ? 'Ok' : "Ainda não!"
        }
    },
    watch: {
        resultado: function() {
          var vm = this;
          setTimeout(function() {
            vm.valor = 0;
          }, 5000)
        }
    }
});
