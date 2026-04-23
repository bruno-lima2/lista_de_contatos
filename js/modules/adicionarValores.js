export default function adicionarValores(containerLeft, label, valor) {
  const wrapper = document.createElement("div");
  containerLeft.appendChild(wrapper);
  const labelSpan = document.createElement("span");
  labelSpan.textContent = label;
  labelSpan.classList.add("labelSpan");
  wrapper.appendChild(labelSpan);
  const valorSpan = document.createElement("span");
  valorSpan.textContent = valor;
  valorSpan.classList.add("valorSpan");
  const valorDiv = document.createElement("div");
  valorDiv.textContent = valor;
  valorDiv.classList.add("valorDiv");
  wrapper.appendChild(valorSpan);
  wrapper.appendChild(valorDiv);
}
