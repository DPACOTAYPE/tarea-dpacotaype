// 5.10 Realice un algoritmo que lea dos vectores de cien elementos y que cal
// cule la suma de éstos guardando su resultado en otro vector, el cual se
// debe presentar en forma impresa.

let num1=[];
let num2=[];
let suma=[];
// let valores1=0;
for(let i=0;i<4;i++){
let valores1=+prompt("Ingrese los 10 primeros números:");
num1.push(valores1);
let valores2=+prompt("Ingrese los 10 segundos números:");
num2.push(valores2);
}
console.log(`Los 10 primeros números son: ${num1}`);
console.log(`Los 10 segundos números son: ${num2}`);
for(j=0;j<4;j++){
    suma[j]=valores1[j]+valores2[j];
}
console.log(`La suma de los valores num1 más num2 es: ${suma}`);
