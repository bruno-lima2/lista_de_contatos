const adicionar = document.querySelector(".adicionar");
const campoNome = document.querySelector(".campo_nome");
const campoEmail = document.querySelector(".campo_email");
const campoCelular = document.querySelector(".campo_celular");
const campos = document.querySelector(".campos");
const feedback = document.createElement("div");
function criarCampo() {
  const campo = document.createElement("div")
  campo.classList.add("campo")
  campos.appendChild(campo)
  const container = document.createElement("div")
  campo.appendChild(container)
  criarCampoItem(container, "Nome: ", campoNome.value)
  criarCampoItem(container, "Email: ", campoEmail.value)
  criarCampoItem(container, "Celular: ", campoCelular.value)
  limparDados()
  botaoRemover(campo)
}
function criarCampoItem(container, label, valor) {
  const wrapper = document.createElement("div")
  container.appendChild(wrapper)
  const labelItem = document.createElement("span")
  labelItem.textContent = `${label}`
  labelItem.style.fontWeight = "bold"
  wrapper.appendChild(labelItem)
  const valorItem = document.createElement("span")
  valorItem.textContent = `${valor}`
  wrapper.appendChild(valorItem)
}
function limparDados() {
  campoNome.value = ""
  campoEmail.value = ""
  campoCelular.value = ""
}
function botaoRemover(campo) {
  const remover = document.createElement("button")
  remover.classList.add("btn", "btn-danger", "remover")
  remover.textContent = "X"
  campo.appendChild(remover)
  remover.addEventListener("click", () => {
    campo.remove()
  })
}
function feedbackErro() {
  feedback.textContent = "Preencha todos os campos"
  feedback.classList.add("invalid-feedback", "feedback")
  campos.prepend(feedback)
}
adicionar.addEventListener("click", () => {
  if (campoNome.value && campoEmail.value && campoCelular.value) {
    feedback.remove()
    criarCampo()
  } else {
    feedbackErro()
  }
})
