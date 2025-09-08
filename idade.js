let idade = 28; 
let result = "";

if (idade >= 60) //defini uma condição para executar
    {result="PODE APOSENTAR"} //atribui valor a uma variavel sem um definido 
else

if (idade >= 55)
    {result="JÁ PODE PEDIR APOSENTADORIA"}

else //outra alternativa se as demais nao der
    {result="AINDA NÃO TEM IDADE PARA APOSENTAR"}

console.log("O resultado é: " + result)