let arraycarros = ['fusca','del rey','chevette','brasilia'];
console.log(arraycarros);
// adicionar no inicio
arraycarros.unshift('gol quadrado');
console.log(arraycarros)
// adicionar no final
arraycarros.push('corsel');
console.log(arraycarros);
// retirar item do começo do array
// arraycarros.shift();
// console.log(arraycarros);
// retirar do final do Array
// arraycarros.pop()
// console.log();

// procurar idice de um item no Array
let indice = arraycarros.indexOf("corsel");
console.log(indice);

// copiar um array 
let copiar = arraycarros.slice();
console.log(copiar);