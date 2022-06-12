// Desenvolver um algoritmo que leia a altura(em cm) de 15 pessoas. Este programa deverá calcular e mostrar : 
// [array] a. A menor altura do grupo; b. A maior altura do grupo;
const arr = [1.50 , 1.65 , 1.72 , 1.81 , 1.42 , 1.73]

const min = Math.min(...arr);
const max = Math.max(...arr);

console.log( + min + "cm");
console.log( + max + "cm");

