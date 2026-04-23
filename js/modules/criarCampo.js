import adicionarValores from "./adicionarValores.js";
import botoes from "./botoes.js";
import salvarLocalStorage from "./salvarLocalStorage.js";

export default function criarCampo() {
  const adicionar = document.querySelector(".adicionar");
  const nome = document.querySelector(".nome");
  const email = document.querySelector(".email");
  const celular = document.querySelector(".celular");
  const campos = document.querySelector(".campos");
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  function criarCampo() {
    const usuario = {
      nome: nome.value,
      email: email.value,
      celular: celular.value,
    };
    usuarios.push(usuario);
    salvarLocalStorage(usuarios, usuario, campos);
    const campo = document.createElement("div");
    campo.classList.add("campo");
    campos.appendChild(campo);
    const containerLeft = document.createElement("div");
    campo.appendChild(containerLeft);
    const containerRight = document.createElement("div");
    containerRight.classList.add("container_right");
    campo.appendChild(containerRight);
    adicionarValores(containerLeft, "Nome: ", nome.value);
    adicionarValores(containerLeft, "Email: ", email.value);
    adicionarValores(containerLeft, "Celular: ", celular.value);
    botoes(containerRight, containerLeft, campo, usuarios, usuario);
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
      adicionarValores(containerLeft, "Nome: ", usuario.nome);
      adicionarValores(containerLeft, "Email: ", usuario.email);
      adicionarValores(containerLeft, "Celular: ", usuario.celular);
      botoes(containerRight, containerLeft, campo, usuarios, usuario);
    });
  }
  carregarDados();
  adicionar.addEventListener("click", () => {
    criarCampo();
  });
}
