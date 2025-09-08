var agora = new Date
var diadasemana = agora.getDay()
console.log (diadasemana)

switch (diadasemana) {
     case 0:
        console.log ("Domingo")        
        break;
     case 1:
        console.log ("Segunda")        
        break;
     case 2:
        console.log ("Terça")        
        break;
     case 3:
        console.log ("Quarta")        
        break;
     case 4:
        console.log ("Quinta")        
        break;
     case 5:
        console.log ("Sexta")        
        break;
     case 6:
        console.log ("Sabado")        
        break;
      
         console.log ("Dia invalido")        

     break;
}
