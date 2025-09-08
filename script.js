
//variaveis definidas
const forma = 'quadrado'
const altura = 5
const comprimento = 7
let area;


//define o calculo da area dando duas opçoes 
if(forma === 'quadrado'){
    area = ( altura * comprimento)
}

else {
    area = (altura*comprimento)/2

}
//executa
console.log(area)
