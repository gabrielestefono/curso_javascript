// var, let, const

// var -> Veio do EcmaScript 05 e funciona em todos os browsers
// let e const -> Vieram da versão EcmaScript 2015 e não funciona em todos os browsers (Explorer11)
// https://caniuse.com/ -- 

let teste = "Minha String";
// let teste = 10 -> Retorna erro
teste = 10;
console.log(teste);

const teste2 = 20;
// teste2 = "Sim"; -> Retorna erro
console.log(teste2);

let teste3;
teste3 = 30;
console.log(teste3);

// const teste4; -> Retorna erro por precisar de um valor;