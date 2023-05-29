let total_par = 0;
let total_impar = 0;
/*for(let i=1 ; i <= 20; i++ ) {
  let quad = i * i;
  console.log(quad);
  if (quad % 2 == 0) {
    total_par += quad; 
  } else {
    total_impar += quad;
  }
}*/

let count = 1;
while (count <= 20) {
  let quad = count * count;
  console.log(quad);
  if (quad % 2 == 0) {
    total_par += quad; 
  } else {
    total_impar += quad;
  }
  count += 1;
}

console.log(`A soma de quadrados pares: ${total_par}`);
console.log(`A soma de quadrados ímpares: ${total_impar}`);