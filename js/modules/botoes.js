import salvarLocalStorage from "./salvarLocalStorage.js";

export default function botoes(
  containerRight,
  containerLeft,
  campo,
  usuarios,
  usuario,
) {
  const nomeEditar = document.createElement("input");
  const emailEditar = document.createElement("input");
  const celularEditar = document.createElement("input");
  const salvar = document.createElement("button");
  function botaoEditar() {
    const editar = document.createElement("button");
    editar.textContent = "EDITAR";
    editar.classList.add("btn", "btn-warning", "editar");
    containerRight.appendChild(editar);
    editar.addEventListener("click", () => {
      containerRight.remove();
      containerLeft.remove();
      campoEditar();
      botaoSalvar();
      botaoCancelar();
    });
  }
  botaoEditar();
  function botaoRemover() {
    const remover = document.createElement("button");
    remover.textContent = "X";
    remover.classList.add("btn", "btn-danger", "remover");
    containerRight.appendChild(remover);
    remover.addEventListener("click", () => {
      campo.remove();
      usuarios = usuarios.filter(
        (u) =>
          !(
            u.nome === usuario.nome &&
            u.email === usuario.email &&
            u.celular === usuario.celular
          ),
      );
      salvarLocalStorage(usuarios);
    });
  }
  botaoRemover();
  function campoEditar() {
    nomeEditar.classList.add("form-control");
    nomeEditar.value = usuario.nome;
    campo.appendChild(nomeEditar);
    emailEditar.classList.add("form-control");
    emailEditar.value = usuario.email;
    campo.appendChild(emailEditar);
    celularEditar.classList.add("form-control");
    celularEditar.value = usuario.celular;
    campo.appendChild(celularEditar);
  }
  function botaoSalvar() {
    salvar.textContent = "SALVAR";
    salvar.classList.add("btn", "btn-success", "salvar");
    campo.appendChild(salvar);
    salvar.addEventListener("click", () => {});
  }
  function botaoCancelar() {
    const cancelar = document.createElement("button");
    cancelar.textContent = "CANCELAR";
    cancelar.classList.add("btn", "btn-secondary", "cancelar");
    campo.appendChild(cancelar);
    cancelar.addEventListener("click", () => {
      campo.appendChild(containerLeft);
      campo.appendChild(containerRight);
      nomeEditar.remove();
      emailEditar.remove();
      celularEditar.remove();
      salvar.remove();
      cancelar.remove();
    });
  }
}

