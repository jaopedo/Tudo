function somar(){

  const num1 = parseFloat
 (document.getElementById("numero1").value);


  const num2 = parseFloat
  (document.getElementById("numero2").value);


  const soma = num1 + num2;
  document.getElementById("resultado").textContent = "A soma é: " + soma;




}