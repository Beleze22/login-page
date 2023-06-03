(function () {
  let usuarios = [
    {
      usuario: "admin@admin.com",
      senha: "admin",
    },
  ];

  function clear() {
    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";
    document.getElementById("usuarioCadastro").value = "";
    document.getElementById("passwordCadastro").value = "";
    document.getElementById("confirmPassword").value = "";
  }

  function cadastrar() {
    const usuario = document.getElementById("usuarioCadastro").value;
    const password = document.getElementById("passwordCadastro").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (usuario && password) {
      if (password === confirmPassword) {
        const novoUsuario = { usuario: usuario, senha: password };
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
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    const login = { usuario: usuario, senha: password };
    const check = usuarios.find((u) => u.usuario === usuario);

    if (usuario && password) {
      if (check !== undefined) {
        if (check.usuario === login.usuario && check.senha == login.senha) {
          alert("Sucesso");
        } else {
          alert("Senha inválida");
        }
      } else {
        alert("Usuário não cadastrado!");
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

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      if (
        document
          .querySelector(".cadastro-box")
          .classList.contains("display-none")
      ) {
        validar();
      } else {
        cadastrar();
      }
    }
  });

  document.querySelector(".login").addEventListener("click", validar);
  document
    .querySelector(".novoCadastro")
    .addEventListener("click", toggleDisplay);
  document.querySelector(".cadastro").addEventListener("click", cadastrar);
})();
