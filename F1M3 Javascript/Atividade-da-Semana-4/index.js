const prompt = require('prompt-sync')();
let alunos = [];

// Implementar a entrada de dados
for (let i = 0; i <= 9; i++) {
  const aluno = {
    name: prompt(`Digite o nome do aluno ${i}: `),
    height: parseFloat(prompt(`Digite a Altura do aluno ${i}: `))
  }
  alunos.push(aluno);
};

/*alunos = [
  {name: 'Cleiton', height: 1.7},
  {name: 'Cesar', height: 1.55},
  {name: 'Helder', height: 1.6},
  {name: 'Diego', height: 1.65},
  {name: 'Adenildo', height: 1.72},
  {name: 'Bruno', height: 1.7},
  {name: 'Cida', height: 1.5},
  {name: 'Viviane', height: 1.78},
  {name: 'Paulo', height: 1.62},
  {name: 'Batista', height: 1.65},
]*/

// Implementar o processamento de dados
// Fazer for dentro de for
for (let i = 0; i < alunos.length; i++) {
  let count = 0;
  let result = [];
  for (let j = 0; j < alunos.length; j++) {
    if (alunos[j]["height"] < alunos[i]["height"]) {
      count++;
      result.push(alunos[j]["name"]);
    }
  }
  // Implementar a saída de dados
  console.log(`Aluno ${alunos[i]["name"]} é maior que ${count} aluno(s), sendo eles ${result.join()}`);}