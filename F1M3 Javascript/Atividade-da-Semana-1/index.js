const prompt = require("prompt-sync")();

// Leia os três números
var n1 = parseInt(prompt("Digite o número 1:"));
var n2 = parseInt(prompt("Digite o número 2:"));
var n3 = parseInt(prompt("Digite o número 3:"));
// Calcule a soma e a média
soma = n1 + n2 + n3;
media = (n1 + n2 + n3) / 3;
// Mostre na tela o valor da soma e média
console.log("A soma é:", soma);
console.log("A média é:", media);