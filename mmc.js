function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }
    var imc = peso / (altura * altura);
    var classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else
    if (imc < 25) {
        classificacao = "Peso normal";
    } else
    if (imc < 30) {
        classificacao = "Sobrepeso";
    }
    else {
        classificacao = "Obesidade";
    }

    window.alert("Seu IMC: " + imc.toFixed(2));
    window.alert("Seu resultado: " + classificacao);
}