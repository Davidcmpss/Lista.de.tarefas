let tarefas = [];
let tarefasConcluidas = [];
const mensa = document.getElementById("mensagem");

function adicionarTarefa() {
  //recebe valor do input do usuário
  const inputTarefa = document.getElementById("inputTarefa");
  // .trim é para limpaar os espaços vazios nas extremidades do valor texto
  let tarefa = inputTarefa.value.trim();

  if (tarefa == "") {
    const mensagem =
      "Digite uma tarefa válida para adicionar na sua lista de tarefas.";
    mensa.textContent = mensagem;
    mensa.style.color = "#c23f3fcc";
  } else if (tarefas.includes(tarefa)) {
    const mensagem3 = "Essa tarefa já está inclusa na sua lista de tarefas.";
    mensa.textContent = mensagem3;
    mensa.style.color = "#ffa200cc";
  } else {
    const mensagem2 = "Tarefa adicionada com sucesso!";
    mensa.textContent = mensagem2;
    mensa.style.color = "#7968a7";
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
    const linhaTarefa = document.createElement("div");
    linhaTarefa.className = "linhaTarefa";
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefas[i];
    const botaoRemover = document.createElement("button");
    botaoRemover.className = "Remover";
    botaoRemover.onclick = () => removeTarefa(i);

    const botaoEditar = document.createElement("button");
    botaoEditar.className = "Editar";
    botaoEditar.onclick = () => editarTarefa(i);

    const botaoConcluir = document.createElement("button");
    botaoConcluir.className = "Concluir";
    botaoConcluir.onclick = () => concluirTarefa(i);

    const menuTarefa = document.createElement("div");
    menuTarefa.className = "menuTarefa";

    listaTarefas.appendChild(linhaTarefa);
    linhaTarefa.appendChild(novaTarefa);
    linhaTarefa.appendChild(menuTarefa);
    menuTarefa.appendChild(botaoRemover);
    menuTarefa.appendChild(botaoEditar);
    menuTarefa.appendChild(botaoConcluir);
  }
}

function removeTarefa(i) {
  tarefas.splice(i, 1);
  renderizarTarefas();
  mensa.textContent = "Tarefa removida com sucesso.";
  mensa.style.color = "#7968a7";
  apagaBotao();
}

function editarTarefa(i) {
  let tarefaEditada = prompt("Edite sua tarefa:");
  if (tarefaEditada.trim() !== "") {
    tarefas[i] = tarefaEditada;
    renderizarTarefas();
  }
  mensa.textContent = "Tarefa editada com sucesso.";
  mensa.style.color = "#7968a7";
}

function concluirTarefa(i) {
  tarefas.splice(i, 1);
  renderizarTarefas();
  mensa.textContent = "Tarefa concluida com sucesso.";
  mensa.style.color = "#7968a7";
  tarefasConcluidas.push(tarefas[i]);
  apagaBotao();
  renderizarTarefasConcluidas(i);
}

function renderizarTarefasConcluidas(i) {
  const listaConcluida = document.getElementById("listaConcluida");
  listaConcluida.innerHTML = "";
}

function butesvaziarLista() {
  const lista = document.getElementById("lista");
  if (tarefas.length == 1) {
    const butLimpar = document.createElement("button");
    butLimpar.id = "butRemove";
    butLimpar.textContent = "Esvaziar Lista";
    lista.appendChild(butLimpar);
    butLimpar.onclick = () => esvaziarLista();
  }
}

function esvaziarLista() {
  tarefas.length = "";
  renderizarTarefas();
  mensa.textContent = "Lista esvaziada com sucesso!";
  mensa.style.color = "#7968a7";
  apagaBotao();
}

function apagaBotao() {
  if (tarefas.length == "") {
    document.getElementById("butRemove").remove();
    mensa.textContent = "Lista esvaziada com sucesso!";
    mensa.style.color = "#7968a7";
  }
}
