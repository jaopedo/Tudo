function multiplicar(){

    const num1 = parseFloat
   (document.getElementById("numero1").value);
  
  
    const num2 = parseFloat
    (document.getElementById("numero2").value);
  
  
    const multiplicar = num1*num2;
    document.getElementById("resultado").textContent = "A Multiplicação é: " + multiplicar;
  
  
  
  
  }