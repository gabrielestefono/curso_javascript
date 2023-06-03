/*for(let i = 0; i<= 10000; i++){
    let teste = document.getElementById('teste');
    teste.innerHTML += `${i}, `;
}*/
/*
let ano = new Date().getFullYear();

for(let i = ano; i >= 1900; i--){
    document.getElementById('ano').innerHTML += `<option value="${i}">${i}</option>`
}*/

const carros = ['Gol', 'Fusca', 'Brasilia', 'Del Rey', 'Chevette'];
carros.forEach(e => {
    document.getElementById('ano').innerHTML += `<option value="${e}">${e}</option>`;
});