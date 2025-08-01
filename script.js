let tarefas = [];
const mensa = document.getElementById("mensagem");

function adicionarTarefa() {
  //recebe valor do input do usuário
  const inputTarefa = document.getElementById("inputTarefa");
  // .trim é para limpaar os espaços vazios nas extremidades do valor texto
  let tarefa = inputTarefa.value.trim();
  // cria uma variável mensagem

  // se tarefa for vazia ou igual a então será mostrado uma mensagem de erro
  if (tarefa == "") {
    const mensagem =
      "Digite uma tarefa válida para adicionar na sua lista de tarefas.";
    mensa.textContent = mensagem;
  }
  if (tarefas.includes(tarefa)) {
    const mensagem3 = "Essa tarefa já está inclusa na sua lista de tarefas.";
    mensa.textContent = mensagem3;
  }
  // se não, será criado um elemento na lista com o valor da vriável inputTarefa - a prória variável tarefa - e mpstrado uma mensagem de sucesso.
  else {
    const mensagem2 = "Tarefa adicionada com sucesso!";
    mensa.textContent = mensagem2;
    tarefas.push(tarefa);
    renderizarTarefas();
    butesvaziarLista();
  }
  // limpa o campo do input
  inputTarefa.value = "";
}

function renderizarTarefas() {
  const listaTarefas = document.getElementById("listaTarefas");
  // .innerHTML atualiza uma variável
  listaTarefas.innerHTML = "";

  // i < tamanho da lista - se dá pelo fato de que o indicie de uma array é sempre um número menor que o número do tamanho dela.
  for (let i = 0; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefas[i];
    const botaoRemover = document.createElement("button");
    const imgRemover = document.createElement("img");
    imgRemover.src = "img/icone_de_lixo.png";
    imgRemover.className = "imagemRemover";
    botaoRemover.className = "Remover";
    botaoRemover.onclick = () => removeTarefa(i);

    const botaoEditar = document.createElement("button");
    const imgEditar = document.createElement("img");
    imgEditar.src = "img/icone_de_editar.png";
    imgEditar.className = "imagemEditar";
    botaoEditar.className = "Editar";
    botaoEditar.onclick = () => editarTarefa(i);
    const menuTarefa = document.createElement("div");
    menuTarefa.className = "menuTarefa";
    novaTarefa.appendChild(menuTarefa);

    menuTarefa.appendChild(botaoRemover);
    botaoRemover.appendChild(imgRemover);
    menuTarefa.appendChild(botaoEditar);
    botaoEditar.appendChild(imgEditar);
    listaTarefas.appendChild(novaTarefa);
  }
}

function removeTarefa(i) {
  tarefas.splice(i, 1);
  renderizarTarefas();
  mensa.textContent = "Tarefa removida com sucesso.";
  apagaBotao();
}

function editarTarefa(i) {
  let tarefaEditada = prompt("Edite sua tarefa:");
  if (tarefaEditada.trim() !== "") {
    tarefas[i] = tarefaEditada;
    renderizarTarefas();
  }
  mensa.textContent = "Tarefa editada com sucesso.";
}

function butesvaziarLista() {
  const lista = document.getElementById("lista");
  const divLista = document.createElement("div");
  lista.appendChild(divLista);
  if (tarefas.length == 1) {
    const butLimpar = document.createElement("button");
    butLimpar.id = "butRemove";
    butLimpar.textContent = "Esvaziar Lista";
    divLista.appendChild(butLimpar);
    butLimpar.onclick = () => esvaziarLista();
  }
}

function esvaziarLista() {
  tarefas.length = "";
  renderizarTarefas();
  mensa.textContent = "Lista esvaziada com sucesso!";
  apagaBotao();
}

function apagaBotao() {
  if (tarefas.length == "") {
    document.getElementById("butRemove").remove();
    mensa.textContent = "Lista esvaziada com sucesso!";
  }
}
