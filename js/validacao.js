document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");
  const msg = document.getElementById("msg");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const campos = form.querySelectorAll("input[required], select[required]");
    let valido = true;

    campos.forEach(campo => {
      if (!campo.value.trim()) {
        campo.classList.add("erro");
        valido = false;
      } else {
        campo.classList.remove("erro");
      }
    });

    if (valido) {
      const dados = Object.fromEntries(new FormData(form));
      localStorage.setItem("ultimoCadastro", JSON.stringify(dados));

      msg.textContent = "Cadastro enviado com sucesso!";
      msg.style.color = "green";
      form.reset();
    } else {
      msg.textContent = "Preencha todos os campos obrigatórios.";
      msg.style.color = "red";
    }
  });
});