function funcaoMultiplicarTresNumeros(x,y,z){
    return x * y * z;
}

console.log(funcaoMultiplicarTresNumeros(2,3,4));

const mult = funcaoMultiplicarTresNumeros(5,4,8);

console.log("O valor de mult é: " + mult);

function podeDirigir(idade){
    if(idade >= 18){
        console.log('Pode dirigir');
    }else{
        console.log('Não pode dirigir');
    }
}

podeDirigir(18);