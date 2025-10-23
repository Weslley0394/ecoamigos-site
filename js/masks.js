document.addEventListener("DOMContentLoaded", function() {

  const cpf = document.getElementById("cpf");
  if (cpf) {
    cpf.addEventListener("input", function() {
      let valor = cpf.value.replace(/\D/g, "");

      if (valor.length > 3 && valor.length <= 6) {
        valor = valor.substring(0, 3) + "." + valor.substring(3);
      } else if (valor.length > 6 && valor.length <= 9) {
        valor = valor.substring(0, 3) + "." + valor.substring(3, 6) + "." + valor.substring(6);
      } else if (valor.length > 9) {
        valor = valor.substring(0, 3) + "." + valor.substring(3, 6) + "." + valor.substring(6, 9) + "-" + valor.substring(9, 11);
      }
      cpf.value = valor;
    });
  }

  const telefone = document.getElementById("telefone");
  if (telefone) {
    telefone.addEventListener("input", function() {
      let valor = telefone.value.replace(/\D/g, "");

      if (valor.length > 2 && valor.length <= 7) {
        valor = "(" + valor.substring(0, 2) + ") " + valor.substring(2);
      } else if (valor.length > 7) {
        valor = "(" + valor.substring(0, 2) + ") " + valor.substring(2, 7) + "-" + valor.substring(7, 11);
      }
      telefone.value = valor;
    });
  }

  const cep = document.getElementById("cep");
  if (cep) {
    cep.addEventListener("input", function() {
      let valor = cep.value.replace(/\D/g, "");

      if (valor.length > 5) {
        valor = valor.substring(0, 5) + "-" + valor.substring(5, 8);
      }
      cep.value = valor;
    });
  }

});