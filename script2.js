function contar() {
    // Pega os elementos do HTML pelos seus IDs
    var startNumber = document.getElementById("start");
    var endNumber = document.getElementById("end");
    var stepNumber = document.getElementById("step");
    var result = document.getElementById("result");
  
    // Verifica se algum campo está vazio
    if (
      startNumber.value.length === 0 ||
      endNumber.value.length === 0 ||
      stepNumber.value.length === 0
    ) {
      result.innerHTML = "⚠️ Erro: preencha todos os campos para contar!";
    } else {
      result.innerHTML = "Contando: <br>🏠 "; // Mensagem inicial
  
      let i = Number(startNumber.value); // Converte o valor de início para número
      let f = Number(endNumber.value);   // Converte o valor de fim para número
      let p = Number(stepNumber.value);  // Converte o valor de passo para número
  
      // Verifica se o passo é menor ou igual a zero
      if (p <= 0) {
        window.alert("⚠️ Passo inválido! O valor precisa ser maior que zero. Usando passo = 1.");
        p = 1; // Corrige o valor do passo
      }
  
      // Contagem crescente
      if (i < f) {
        for (let c = i; c <= f; c += p) {
          result.innerHTML += `${c} ✌🏻 `; // Adiciona cada número com emoji
        }
      }
      // Contagem regressiva
      else {
        for (let c = i; c >= f; c -= p) {
          result.innerHTML += `${c} ✌🏻 `; // Adiciona cada número com emoji
        }
      }
  
      result.innerHTML += `🏁`; // Finaliza com bandeira
    }
  }
  