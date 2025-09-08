function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const msg = document.getElementById("mensagem");
  
    if (usuario === "Admin" && senha === "123@4") {
      window.location.href = "home.html";
    } else {
      msg.innerText = "Usuário ou senha incorretos!";
    }
  }  