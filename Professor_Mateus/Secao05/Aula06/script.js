var idade = 18;
var carteira = true;

if(idade >= 18 && carteira){
    console.log('Você pode dirigir!');
}else if(!carteira && idade >= 18){
    console.log('Você não possui CNH');
}else{
    console.log('Sua idade é menor que a permitida!');
}