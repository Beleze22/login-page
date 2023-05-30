let usuarios = [
  {
    email: "admin@admin.com",
    senha: "admin",
  },
];

function cadastrar() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const novoUsuario = { email: email, senha: password };

  usuarios.push(novoUsuario);

  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

function validar() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const login = { email: email, senha: password };

  const check = usuarios.find((e) => e.email === email);

  console.log(check);
}
