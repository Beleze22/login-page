let usuarios = [
  {
    email: "admin@admin.com",
    senha: "admin",
  },
];

function clear() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("emailCadastro").value = "";
  document.getElementById("passwordCadastro").value = "";
  document.getElementById("confirmPassword").value = "";
}

function cadastrar() {
  const email = document.getElementById("emailCadastro").value;
  const password = document.getElementById("passwordCadastro").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (email && password) {
    if (password === confirmPassword) {
      const novoUsuario = { email: email, senha: password };
      usuarios.push(novoUsuario);
      clear();
      alert("Novo usuário cadastrado!");
      toggleDisplay();
    } else {
      alert("Senhas não são iguais!");
      clear();
    }
  } else {
    alert("Preencha os campos necessários!");
  }
}

function validar() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const login = { email: email, senha: password };
  const check = usuarios.find((e) => e.email === email);

  if (email && password) {
    if (check !== undefined) {
      if (check.email === login.email && check.senha == login.senha) {
        alert("Sucesso");
      } else {
        alert("Senha inválida");
      }
    } else {
      alert("E-mail não cadastrado!");
    }
  } else {
    alert("Preencha os campos solicitados!");
  }

  clear();
}

function toggleDisplay() {
  document.querySelector(".login-box").classList.toggle("display-none");
  document.querySelector(".cadastro-box").classList.toggle("display-none");
}
