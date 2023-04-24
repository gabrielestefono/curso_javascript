var num1 = 20;
var num2 = 3;

var soma = num1 + num2;
var subtracao = num1 - num2;
var divisao = num1 / num2;
var multiplicacao = num1 * num2;

var media = (num1 + num2) / 2;
console.log("A média é " + media);

console.log(Math.pow(num1, num2));
/* Parênteses podem ser usados para montar expressões. Neste caso eles são necessários para calcular a média de dois números, 
caso contrário a divisão num2 / 2 seria realizada antes da soma, devido à ordem das operações matemáticas.*/

// Variáveis incrementais;

var increment = 20;
increment = increment + 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
console.log(increment); // O console mostrará 25

// esta estrutura variável = variável + valor, pode ser simplificada com o operador incremental +=

increment = 1;
increment += 5;
console.log(increment); // O console mostrará 6

// podemos também usar *=, /= e -= para multiplicação, divisão e subtração