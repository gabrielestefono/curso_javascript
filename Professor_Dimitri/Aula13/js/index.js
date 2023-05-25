/* if e else*/
/*
var interruptor = "off";

if(interruptor == "on"){
    console.log("A lâmpada está ligada!")
}else{
    console.log('A lâmpada está desligada!')
}*/
/*
var hora = new Date().getHours();
if(hora < 12){
    console.log('Bom dia!')
}else if(hora < 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}
*/

function verificar(){
    var nome = document.getElementById('nome').value;
    if(nome == '' || nome == null){
        var p = document.getElementById('teste')
        p.innerHTML = 'O campo não pode ser vazio!';
        p.style.color = 'red';
    }else{
        var p = document.getElementById('teste')
        p.innerHTML = 'Parabéns! Tudo certinho!';
        p.style.color = 'green';
    }
}