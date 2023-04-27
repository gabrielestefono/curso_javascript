let n1 = 'Oi';
let n2 = 2;

n2 = 10;
n2 = n2 + ''; // Posso converter também usando o .toString();
console.log(n2);
console.log(typeof(n2));

red = 255;
green = 127;
blue = 39;

red = red.toString(16);
green = green.toString(16);
blue = blue.toString(16);

console.log(`A sua cor é: ${red.toUpperCase()}${green.toUpperCase()}${blue.toUpperCase()}`);