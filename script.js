const logar = document.getElementById("acessar");
const mostrarSenha = document.getElementById("visibility");
const alerta = document.getElementById('mensagem');
  
logar.addEventListener("click", () => {
    verificacaoGeral();
})

mostrarSenha.addEventListener("click", () => {
  const input = document.getElementById("senha");

  if (mostrarSenha.textContent == "visibility") {
    input.setAttribute("type", "text");
    mostrarSenha.innerHTML = "visibility_off";
  } else {
    input.setAttribute("type", "password");
    mostrarSenha.innerHTML = "visibility";
  }
});


function verificacaoGeral(event) {
    let user = document.getElementById("user").value;
    let password = document.getElementById("senha").value;

    //verifica se o usuário e senha estão preenchidos e retorna erro caso não estejam
    if ((user === "" ) && (password === "")) {
        alerta.innerHTML = "Digite seu usuário e senha";
    } else {
        alerta.innerHTML = "";
    }   

      if (
        password.length < 8 ||
        !/[^a-zA-Z0-9]/.test(password) ||
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/\d/.test(password)
      ) {
        alerta.innerHTML = "Acesso negado! Usuário ou Senha Incorretos";
      } else {
        alerta.innerHTML = "Login efetuado com sucesso";
      }
}
