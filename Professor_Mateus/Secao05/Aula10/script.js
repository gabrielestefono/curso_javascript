let x = 17;
let primo = '';
for(let y = x; y > 0; y--){
    if(x % y == 0){
        if(x != y){
            if(y != 1){
                primo = false;
                break
            }else{
                if(primo == ''){
                    primo = true;
                }else{
                    primo = false;
                }
            }
        }
    }
}

if(primo){
    console.log('É primo!')
}else{
    console.log('Não é primo!')
}