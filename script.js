const containerNome = document.querySelector(".container_nome");
const nome = document.querySelector(".nome");
const feedbackNome = document.createElement("div");
const containerEmail = document.querySelector(".container_email");
const email = document.querySelector(".email");
const feedbackEmail = document.createElement("div");
const containerCelular = document.querySelector(".container_celular");
const celular = document.querySelector(".celular");
const feedbackCelular = document.createElement("div");
const adicionar = document.querySelector(".adicionar");
const campos = document.querySelector(".campos");
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
function criarCampo() {
  const usuario = {
    nome: nome.value,
    email: email.value,
    celular: celular.value,
  };
  usuarios.push(usuario);
  salvarDados();
  const campo = document.createElement("div");
  campo.classList.add("campo");
  campos.appendChild(campo);
  const containerLeft = document.createElement("div");
  campo.appendChild(containerLeft);
  const containerRight = document.createElement("div");
  containerRight.classList.add("container_right");
  campo.appendChild(containerRight);
  botaoEditar(containerRight, campo, usuario);
  botaoRemover(campo, containerRight, usuario);
  adicionarValores(containerLeft, "Nome: ", nome.value);
  adicionarValores(containerLeft, "Email: ", email.value);
  adicionarValores(containerLeft, "Celular: ", celular.value);
}
function botaoRemover(campo, containerRight, usuario) {
  const remover = document.createElement("button");
  remover.classList.add("btn", "btn-danger", "remover");
  remover.textContent = "X";
  containerRight.appendChild(remover);
  remover.addEventListener("click", () => {
    campo.remove();
    usuarios = usuarios.filter(
      (u) =>
        !(
          usuario.nome === u.nome &&
          usuario.email === u.email &&
          usuario.celular === u.celular
        ),
    );
    salvarDados();
  });
}
function adicionarValores(containerLeft, label, valor) {
  const wrapper = document.createElement("div");
  containerLeft.appendChild(wrapper);
  const labelCriado = document.createElement("span");
  labelCriado.textContent = label;
  labelCriado.style.fontWeight = "bold";
  wrapper.appendChild(labelCriado);
  const valorCriado = document.createElement("span");
  valorCriado.textContent = valor;
  wrapper.appendChild(valorCriado);
}
function salvarDados() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}
function limparDados() {
  ((nome.value = ""), (email.value = ""), (celular.value = ""));
}
function carregarDados() {
  usuarios.forEach((usuario) => {
    const campo = document.createElement("div");
    campo.classList.add("campo");
    campos.appendChild(campo);
    const containerLeft = document.createElement("div");
    campo.appendChild(containerLeft);
    const containerRight = document.createElement("div");
    containerRight.classList.add("container_right");
    campo.appendChild(containerRight);
    botaoEditar(containerRight, campo, usuario);
    botaoRemover(campo, containerRight, usuario);
    adicionarValores(containerLeft, "Nome: ", usuario.nome);
    adicionarValores(containerLeft, "Email: ", usuario.email);
    adicionarValores(containerLeft, "Celular: ", usuario.celular);
  });
}
carregarDados();
function validacaoNome() {
  if (nome.value.length > 2) {
    feedbackNome.remove();
    return true;
  } else {
    feedbackNome.textContent = "O nome é inválido";
    feedbackNome.classList.add("invalid-feedback", "feedback");
    containerNome.appendChild(feedbackNome);
    return false;
  }
}
nome.addEventListener("blur", validacaoNome);
function validacaoEmail() {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regexEmail.test(email.value)) {
    feedbackEmail.remove();
    return true;
  } else {
    feedbackEmail.textContent = "O email é inválido";
    feedbackEmail.classList.add("invalid-feedback", "feedback");
    containerEmail.appendChild(feedbackEmail);
    return false;
  }
}
email.addEventListener("blur", validacaoEmail);
function validacaoCelular() {
  if (celular.value.replace(/\D/g, "").length === 11) {
    feedbackCelular.remove();
    return true;
  } else {
    feedbackCelular.textContent = "O número de celular é inválido";
    feedbackCelular.classList.add("invalid-feedback", "feedback");
    containerCelular.appendChild(feedbackCelular);
    return false;
  }
}
celular.addEventListener("blur", validacaoCelular);
function mascaraCelular() {
  celular.addEventListener("input", () => {
    celular.value = celular.value.replace(/\D/g, "").slice(0, 11);
    let valor = celular.value;
    let numeros = valor;
    if (valor.length > 0) {
      numeros = `(${valor.slice(0, 2)}`;
    }
    if (valor.length > 2) {
      numeros = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)}`;
    }
    if (valor.length > 3) {
      numeros = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)}`;
    }
    if (valor.length > 7) {
      numeros = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)}-${valor.slice(7, 11)}`;
    }
    celular.value = numeros;
  });
}
mascaraCelular();
function botaoEditar(containerRight, campo, usuario) {
  const editar = document.createElement("button");
  editar.classList.add("btn", "btn-warning", "editar");
  editar.textContent = "EDITAR";
  containerRight.appendChild(editar);
  editar.addEventListener("click", () => {
    limparCampo(campo);
    editarCampo(campo, usuario);
  });
}
function limparCampo(campo) {
  campo.innerHTML = "";
}
function editarCampo(campo, usuario) {
  const nome = document.createElement("input");
  nome.classList.add("form-control");
  nome.value = usuario.nome;
  const email = document.createElement("input");
  email.classList.add("form-control");
  email.value = usuario.email;
  const celular = document.createElement("input");
  celular.classList.add("form-control");
  celular.value = usuario.celular;
  campo.appendChild(nome);
  campo.appendChild(email);
  campo.appendChild(celular);
  const containerRight = document.createElement("div");
  containerRight.classList.add("container_right");
  campo.appendChild(containerRight);
  botaoSalvar(containerRight);
  botaoCancelar(containerRight, campo, usuario);
}
function botaoSalvar(containerRight) {
  const salvar = document.createElement("button");
  salvar.classList.add("btn", "btn-success", "salvar");
  salvar.textContent = "SALVAR";
  containerRight.appendChild(salvar);
}
function botaoCancelar(containerRight, campo, usuario) {
  const cancelar = document.createElement("button");
  cancelar.classList.add("btn", "btn-secondary", "cancelar");
  cancelar.textContent = "CANCELAR";
  containerRight.appendChild(cancelar);
  cancelar.addEventListener("click", () => {
    campo.remove();
    recriarCampo(usuario);
  });
}
function recriarCampo(usuario) {
  const campo = document.createElement("div");
  campo.classList.add("campo");
  campos.appendChild(campo);
  const containerLeft = document.createElement("div");
  campo.appendChild(containerLeft);
  const containerRight = document.createElement("div");
  containerRight.classList.add("container_right");
  campo.appendChild(containerRight);
  botaoEditar(containerRight, campo, usuario);
  botaoRemover(campo, containerRight, usuario);
  adicionarValores(containerLeft, "Nome: ", usuario.nome);
  adicionarValores(containerLeft, "Email: ", usuario.email);
  adicionarValores(containerLeft, "Celular: ", usuario.celular);
}
adicionar.addEventListener("click", () => {
  const nomeOk = validacaoNome();
  const emailOk = validacaoEmail();
  const celularOk = validacaoCelular();
  if (nomeOk && emailOk && celularOk) {
    criarCampo();
    limparDados();
  }
});
