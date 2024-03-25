/*
Como você pode verificar se um número é múltiplo de 3 ou 5 em 
JavaScript usando operadores lógicos?
*/

let numero = 8;

if (numero % 3 === 0 || numero % 5 === 0) {
    console.log("O um número é múltiplo de 3 ou 5");
} else {
    console.log("O número não satisfaz as condições.");
}