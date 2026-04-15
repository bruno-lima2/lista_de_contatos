const campoNome = document.querySelector(".campo_nome");
const campoEmail = document.querySelector(".campo_email");
const campoCelular = document.querySelector(".campo_celular");
const adicionar = document.querySelector(".adicionar");
const campos = document.querySelector(".campos");
const feedback = document.createElement("div");
function feedbackErro() {
  feedback.textContent = "Preencha todos os campos";
  feedback.classList.add("invalid-feedback", "feedback");
  campos.prepend(feedback);
}
function limparDados() {
  campoNome.value = "";
  campoEmail.value = "";
  campoCelular.value = "";
}
function adicionarValores(container, campoLabel, campoValor) {
  const wrapper = document.createElement("div");
  container.appendChild(wrapper);
  const label = document.createElement("span");
  label.textContent = campoLabel;
  label.style.fontWeight = "bold";
  wrapper.appendChild(label);
  const valor = document.createElement("span");
  valor.textContent = campoValor;
  wrapper.appendChild(valor);
}
adicionar.addEventListener("click", () => {
  if (campoNome.value && campoEmail.value && campoCelular.value) {
    feedback.remove();
    criarCampo();
    limparDados();
  } else {
    feedbackErro();
  }
});
function criarCampo() {
  const campo = document.createElement("div");
  campo.classList.add("campo");
  campos.appendChild(campo);
  const container = document.createElement("div");
  container.classList.add("container");
  campo.appendChild(container);
  botaoRemover(campo);
  adicionarValores(container, "Nome: ", campoNome.value);
  adicionarValores(container, "Email: ", campoEmail.value);
  adicionarValores(container, "Celular: ", campoCelular.value);
}
function botaoRemover(campo) {
  const remover = document.createElement("button");
  remover.textContent = "X";
  remover.classList.add("btn", "btn-danger", "remover");
  campo.appendChild(remover);
  remover.addEventListener("click", () => {
    campo.remove();
  });
}
