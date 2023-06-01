function verificaCor(){
    let cor = document.getElementById('cor').value;
    let texto = document.getElementById('teste');
    cor = cor.toLowerCase();
    switch(cor){
        case 'azul':
            document.body.style.backgroundColor = 'blue'
            texto.innerHTML = ''
            break
        case 'vermelho':
            document.body.style.backgroundColor = 'red'
            texto.innerHTML = ''
            break
        case 'amarelo':
            document.body.style.backgroundColor = 'yellow'
            texto.innerHTML = ''
            break
        default:
            texto.innerHTML = 'Nenhuma cor disponível para ' + cor
    }
}