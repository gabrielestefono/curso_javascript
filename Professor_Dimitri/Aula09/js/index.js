let carro = {marca: "ford", 
            modelo: "ka", 
            ano: 2015, 
            placa: "abc1234",
            bozina: function(){alert('biiiiiiiiiiiii')},
            completo: function(){return `Marca: ${this.marca} <br> modelo: ${this.modelo} <br> ano: ${this.ano} placa: ${this.placa}`}
        };
console.log(carro)