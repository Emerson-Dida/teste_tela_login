
const acesso = document.getElementById("acessar");
let mostrarSenha = document.getElementById("visibility");

acesso.addEventListener('click', () => {
    verificacaoGeral();

})

mostrarSenha.addEventListener('click', () => {
  const input = document.getElementById('senha');

  if (mostrarSenha.textContent == "visibility") {
    input.setAttribute("type", "text");
    mostrarSenha.innerHTML = "visibility_off";
  } else {
    input.setAttribute("type", "password");
    mostrarSenha.innerHTML = "visibility";
  }
   
})

// função de verificação geral dos valores fornecidos pelo usuário
function verificacaoGeral () {
  let senha = document.getElementById("senha").value;
  let user = document.getElementById("user").value;
  const alerta = document.querySelector("p");

    //verificação de ambos ao mesmo tempo 
    //verifica se ambos os valores estão vazios e retorna a mensagem
    if((user === "") && (senha === "")) {
        alerta.innerHTML = "Digite seu usuário e senha";
        alerta.style.color = "red";
        return;

    // verifica se o valor de usuário está vazio a senha está preenchida    
    } else if ((user === "") && (senha)) {
      alerta.innerHTML = "Digite seu usuário";
      alerta.style.color = "red";
      return;


      

    // verifica se o valor de usuário está preenchido a senha está vazia  
    } else if ((user) && (senha == "")) {
      alerta.innerHTML = "Digite seu senha";
      alerta.style.color = "red";
      return;
    };

    // verifica se a á presença de números na senha, se não houver retorna erro
    if(!/\d+/.test(senha)) {
        alerta.innerHTML = "Senha incorreta! digite novamente";
        alerta.style.color = "red";
    
    //verifica se há presença de números, se não, retorna erro        
    } else if(!/[^a-zA-Z0-9]/.test(senha)){
      alerta.innerHTML = "Senha incorreta! digite novamente";
      alerta.style.color = "red";

      //verifica se há presença de carateres(letra), se não, retorna erro
    } else if (!/[A-Za-z]/.test(senha)) {
      alerta.innerHTML = "Senha incorreta! digite novamente";
      alerta.style.color = "red";
      //verifica se há presença de carateres especiais, se não, retorna erro
    } else if (!/[^a-zA-Z0-9]+$/) {
      alerta.innerHTML = "Senha incorreta! digite novamente";
      alerta.style.color = "red";
    } else if (!/[A-Z]/.test(senha)) {
      alerta.innerHTML = "Senha incorreta! digite novamente";
      alerta.style.color = "red";
    } else if (senha.length < 8) {
      alerta.innerHTML = "Senha incorreta! digite novamente";
      alerta.style.color = "red";
    } else if (!/[a-z]/.test(senha)) {
      alerta.innerHTML = "Senha incorreta! digite novamente";
      alerta.style.color = "red";
    }

    //se estiver tudo ok, retorna acesso concedido
    else {
      alerta.innerHTML = "Acesso Concedido";
      alerta.style.color = "blue";
    }

}




