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
function criarCampo() {
  const campo = document.createElement("div");
  campo.classList.add("campo");
  campos.appendChild(campo);
  const campoContainer = document.createElement("div");
  campoContainer.classList.add("campo_container");
  campo.appendChild(campoContainer);
  criarCampoNome(campoContainer);
  criarCampoEmail(campoContainer);
  criarCampoCelular(campoContainer);
  limparDados();
  botaoRemover(campo);
}
function criarCampoNome(campoContainer) {
  const containerNome = document.createElement("div");
  containerNome.classList.add("campo_wrapper");
  campoContainer.appendChild(containerNome);
  const labelNome = document.createElement("span");
  labelNome.textContent = "Nome: ";
  labelNome.style.fontWeight = "bold";
  containerNome.appendChild(labelNome);
  const valorNome = document.createElement("span");
  valorNome.textContent = campoNome.value;
  containerNome.appendChild(valorNome);
}
function criarCampoEmail(campoContainer) {
  const containerEmail = document.createElement("div");
  containerEmail.classList.add("campo_wrapper");
  campoContainer.appendChild(containerEmail);
  const labelEmail = document.createElement("span");
  labelEmail.textContent = "Email: ";
  labelEmail.style.fontWeight = "bold";
  containerEmail.appendChild(labelEmail);
  const valorEmail = document.createElement("span");
  valorEmail.textContent = campoEmail.value;
  containerEmail.appendChild(valorEmail);
}
function criarCampoCelular(campoContainer) {
  const containerCelular = document.createElement("div");
  containerCelular.classList.add("campo_wrapper");
  campoContainer.appendChild(containerCelular);
  const labelCelular = document.createElement("span");
  labelCelular.textContent = "Celular: ";
  labelCelular.style.fontWeight = "bold";
  containerCelular.appendChild(labelCelular);
  const valorCelular = document.createElement("span");
  valorCelular.textContent = campoCelular.value;
  containerCelular.appendChild(valorCelular);
}
function botaoRemover(campo) {
  const remover = document.createElement("button");
  remover.classList.add("btn", "btn-danger", "remover");
  remover.textContent = "X";
  campo.appendChild(remover);
  remover.addEventListener("click", () => {
    campo.remove();
  });
}
adicionar.addEventListener("click", () => {
  if (campoNome.value && campoEmail.value && campoCelular.value) {
    feedback.remove();
    criarCampo();
  } else {
    feedbackErro();
  }
});
