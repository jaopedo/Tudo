var exibeMensagem = 1 
    if (exibeMensagem = 1) {
         var forabloco = "Java";   // Variaveis(var) são a melhor opção, 'const' e 'let' nao transfere do 'if'.
         var dentroBloco = "Alura";
         var dentroblocotbm = "Polo";
         console.log(dentroBloco); // Alura
         console.log(forabloco); 
         console.log(dentroblocotbm); 
    }
    console.log("Apresentar FORA do bloco");
    console.log(forabloco); // Java
    console.log(dentroBloco); 
    console.log(dentroblocotbm); 