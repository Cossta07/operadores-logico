/*
Como você pode verificar se um número é ímpar ou menor que 50 em 
JavaScript usando operadores lógicos?
*/

let numero = 36;

if (numero % 2 !== 0 && numero < 50) {
    console.log("O número é ímpar e menor que 50.");
} else {
    console.log("O número não satisfaz as condições.");
}