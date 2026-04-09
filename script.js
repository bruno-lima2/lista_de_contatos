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
  criarCampoNome(campo);
  criarCampoEmail(campo);
  criarCampoCelular(campo);
  limparDados();
}
function criarCampoNome(campo) {
  const containerNome = document.createElement("div");
  campo.appendChild(containerNome);
  const labelNome = document.createElement("span");
  labelNome.textContent = "Nome: ";
  labelNome.style.fontWeight = "bold";
  containerNome.appendChild(labelNome);
  const valorNome = document.createElement("span");
  valorNome.textContent = campoNome.value;
  containerNome.appendChild(valorNome);
}
function criarCampoEmail(campo) {
  const containerEmail = document.createElement("div");
  campo.appendChild(containerEmail);
  const labelEmail = document.createElement("span");
  labelEmail.textContent = "Email: ";
  labelEmail.style.fontWeight = "bold";
  containerEmail.appendChild(labelEmail);
  const valorEmail = document.createElement("span");
  valorEmail.textContent = campoEmail.value;
  containerEmail.appendChild(valorEmail);
}
function criarCampoCelular(campo) {
  const containerCelular = document.createElement("div");
  campo.appendChild(containerCelular);
  const labelCelular = document.createElement("span");
  labelCelular.textContent = "Celular: ";
  labelCelular.style.fontWeight = "bold";
  containerCelular.appendChild(labelCelular);
  const valorCelular = document.createElement("span");
  valorCelular.textContent = campoCelular.value;
  containerCelular.appendChild(valorCelular);
}
adicionar.addEventListener("click", () => {
  if (campoNome.value && campoEmail.value && campoCelular.value) {
    feedback.remove();
    criarCampo();
  } else {
    feedbackErro();
  }
});
