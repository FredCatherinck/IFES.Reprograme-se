const prompt = require('prompt-sync')();
var array_tintas = [];
var codigo = 0;

do {
  console.log("Sistema de Cadastro de Tintas");
  console.log("1 - Inserir Tinta");
  console.log("2 - Excluir Tinta");
  console.log("3 - Listar Tintas");
  console.log("4 - Atualizar Tinta");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Tinta...\n");
    //let codigo = parseInt(prompt("Digite o código: "));
    codigo++
    let cor = prompt("Digite a cor: ");
    let quantidade = prompt("Digite a quantidade: ");
    let embalagem = prompt("Digite a embalagem: ");
    let preco = prompt("Digite o preco: ");

    // Neste trecho estamos declarando um objeto
    const tinta = {
      codigo: codigo,
      cor: cor,
      quantidade: quantidade,
      embalagem: embalagem,
      preco: preco
    }
    // Chamar a função inserir
    inserir_tinta(tinta);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Tinta...\n");
    let codigo = prompt("Digite o código da tinta: ");
    // Chamar a função excluir
    excluir_tinta(codigo);
  } else if (opcao == 3) {
    console.log("\n\nListando Tintas...\n");
    // Chamar a função listar
    listar_tintas();
  } else if (opcao == 4) {
    console.log("\n\nAtualizando Tintas...\n");
    let codigo = prompt("Digite o código da tinta: ");
    // Chamar a função atualizar
    atualizar_tinta(codigo);
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_tinta(tinta) {
  // Implementar corpo da função
  array_tintas.push(tinta);
}

function excluir_tinta(codigo) {
  // Implementar corpo da função
  let result = false;
  for(let i=0;i < array_tintas.length;i++) {
    if (array_tintas[i]['codigo'] == codigo) {
      array_tintas.splice(i, 1);
      result = true;
    }
  }
  check_result(result, codigo, "delete");
}

function listar_tintas() {
  // Implementar corpo da função
  for(let i=0;i < array_tintas.length;i++) {
    console.log(`${array_tintas[i]['codigo']}: ${array_tintas[i]['cor']} - ${array_tintas[i]['quantidade']} - ${array_tintas[i]['embalagem']} - ${array_tintas[i]['preco']}`);
  }
  
}

function atualizar_tinta(codigo) {
  let result = false;
  let cor = prompt("Digite a cor: ");
  let quantidade = prompt("Digite a quantidade: ");
  let embalagem = prompt("Digite a embalagem: ");
  let preco = prompt("Digite o preco: ");
  for(let i=0;i < array_tintas.length;i++) {
    if (array_tintas[i]['codigo'] == codigo) {
      array_tintas[i]['cor'] = cor;
      array_tintas[i]['quantidade'] = quantidade;
      array_tintas[i]['embalagem'] = embalagem;
      array_tintas[i]['preco'] = preco;
      array_tintas = array_tintas;
      result = true;
    }
  }
  check_result(result, codigo, "update");
}

function check_result(result, codigo, type) {
  if (!result) {
    console.log(`Registro ${codigo} não localizado em nossa base.`);
  } else {
    console.log(`Registro ${codigo} ${type === "delete"? 'deletado' : 'atualizado'} com sucesso.`);
  }
}