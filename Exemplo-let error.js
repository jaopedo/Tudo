var exibeMensagem = 1 
    if (exibeMensagem = 1) {
         var forabloco = "Java";   // Neste caso caso esta errado pois ele nao transfere do if com 'const' e 'let'.
         let dentroBloco = "Alura";
         const dentroblocotbm = "Polo"
         console.log(dentroBloco); // Alura
         console.log(forabloco); 
         console.log(dentroblocotbm); 
    }
    console.log("Apresentar FORA do bloco");
    console.log(forabloco); // Java
    console.log(dentroBloco); 
    console.log(dentroblocotbm); 