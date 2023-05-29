(function() {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          form.classList.add('was-validated')
        } else {
          inserir()
          form.classList.remove('was-validated')
          form.reset()
        }
        event.preventDefault()
        event.stopPropagation()
      }, false)
    })
})()


function getLocalStorage() {
  return JSON.parse(localStorage.getItem('bd_Tapetes')) ?? [];
}

function setLocalStorage(bd_Tapetes) {
  localStorage.setItem('bd_Tapetes', JSON.stringify(bd_Tapetes));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() { // Adaptação da função atualizarTabela (5 pontos)
  limparTabela();
  const bd_Tapetes = getLocalStorage();
  let index = 0;
  for (Tapetes of bd_Tapetes) {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${Tapetes.tipo}</td>
        <td>${Tapetes.Estilo}</td>
        <td>${Tapetes.marca}</td>
        <td>${Tapetes.tamanho}</td>
        <td>${Tapetes.tecido}</td>
        <td>${Tapetes.cor}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `
    document.querySelector('#tabela>tbody').appendChild(novaLinha)
    index++;
  }
}

function inserir() { // Adaptação da função inserir (10 pontos)
  const Tapetes = {
    tipo: document.getElementById('tipo').value,
    Estilo: document.getElementById('Estilo').value,
    marca: document.getElementById('marca').value,
    tamanho: document.getElementById('tamanho').value,
    tecido: document.getElementById('tecido').value,
    cor: document.getElementById('cor').value,
  }
  const bd_Tapetes = getLocalStorage();
  bd_Tapetes.push(Tapetes);
  setLocalStorage(bd_Tapetes);
  atualizarTabela();
}

function excluir(index) { // Adaptação da função excluir (5 pontos)
  const bd_Tapetes = getLocalStorage();
  bd_Tapetes.splice(index, 1);
  setLocalStorage(bd_Tapetes);
  atualizarTabela();
}

function validarMarca() { // Adaptação da função validar (10 pontos)
  const bd_Tapetes = getLocalStorage();
  for (Tapetes of bd_Tapetes) {
    if (marca.value == Tapetes.marca) {
      marca.setCustomValidity("Esta marca já foi cadastrada!");
      feedbackMarca.innerText = "Esta marca já foi cadastrada!";
      return false;
    } else {
      marca.setCustomValidity("");
      feedbackMarca.innerText = "Informe a marca corretamente.";
    }
  }
  return true;
}

atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const marca = document.getElementById("marca");
const feedbackMarca = document.getElementById("feedbackMarca");
marca.addEventListener('input', validarMarca);