/*function soma(valor1, valor2){
    return valor1 + valor2
}

var total = soma(10, 23);

alert(total);*/

/*function realEmDolar(real, dolarHoje){
    return real * dolarHoje
}

var total = realEmDolar(10, 5.08);
alert(`O valor em dolar de R$10.00 é de: $${total.toFixed(2)}`)*/
/*
function alertaHello(){
    alert("Hello!")
}*/

function paraCelcius(temperatura){
    return (5/9) * (temperatura - 32);
}

var x = parseInt(prompt("Digite a temperatura: "))
document.getElementById('texto').innerHTML = `A temperatura de ${x} Fahrenheit em Celsius é de: ${paraCelcius(x)}`;