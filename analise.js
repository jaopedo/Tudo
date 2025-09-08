var idade = 67 //atribui um valor a variavel
console.log(`Você tem ${idade} anos.`) //imprime um valor com um texto
if (idade < 16) { //define uma condição
    console.log("Não vota.") //se for verdade imprime um texto
} else if (idade < 18 || idade > 65) { // outra condição
        console.log("Voto opcional.")//Imprime se essa for verdade um texto
    } else { // ultima condição
        console.log("Voto obrigatório.") // imprime um texto 
    }