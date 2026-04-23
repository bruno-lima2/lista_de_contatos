export default function salvarLocalStorage(usuarios) {
  function salvarDados() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
  salvarDados();
}
