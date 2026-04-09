const adicionar = document.querySelector(".adicionar");
const campoNome = document.querySelector(".campo_nome");
const campoEmail = document.querySelector(".campo_email");
const campoCelular = document.querySelector(".campo_celular");
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
adicionar.addEventListener("click", () => {
  if (campoNome.value && campoEmail.value && campoCelular.value) {
    feedback.remove();
    criarCampo();
  } else {
    feedbackErro();
  }
});
function botaoRemover(campo) {
  const remover = document.createElement("button");
  remover.classList.add("btn", "btn-danger", "remover");
  remover.textContent = "X";
  campo.appendChild(remover);
  remover.addEventListener("click", () => {
    campo.remove();
  });
}

function criarCampo() {
  const campo = document.createElement("div");
  campo.classList.add("campo");
  campos.appendChild(campo);
  const campoContainer = document.createElement("div");
  campoContainer.classList.add("campo_container");
  campo.appendChild(campoContainer);
  criarCampoItem(campoContainer, "Nome", campoNome.value);
  criarCampoItem(campoContainer, "Email", campoEmail.value);
  criarCampoItem(campoContainer, "Celular", campoCelular.value);
  limparDados();
  botaoRemover(campo);
}
function criarCampoItem(campoContainer, label, valor) {
  const container = document.createElement("div");
  container.classList.add("campo_wrapper");
  campoContainer.appendChild(container);
  const labelItem = document.createElement("span");
  labelItem.textContent = `${label}: `;
  labelItem.style.fontWeight = "bold";
  container.appendChild(labelItem);
  const valorItem = document.createElement("span");
  valorItem.textContent = valor;
  container.appendChild(valorItem);
}
