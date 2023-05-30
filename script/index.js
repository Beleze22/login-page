let usuarios = [
  {
    email: "admin@admin.com",
    senha: "admin",
  },
];

function clear() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

function cadastrar() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const novoUsuario = { email: email, senha: password };

  usuarios.push(novoUsuario);

  clear();
}

function validar() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const login = { email: email, senha: password };

  const check = usuarios.find((e) => e.email === email);

  if (check.email === login.email && check.senha == login.senha) {
    alert("Sucesso");
  } else {
    alert("Login ou senha inválidos");
  }

  clear();
}
