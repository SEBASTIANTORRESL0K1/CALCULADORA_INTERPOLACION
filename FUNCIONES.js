// 1. Calcular el IVA de un producto:
// Descripción:
// Debes crear una función que calcule el IVA de un producto.
// La función debe recibir dos argumentos: el precio del producto y la tasa de IVA.
// La función debe retornar el IVA del producto.
// Tipo de función: Tradicional o arrow
// Ejemplos:
// Si el precio del producto es $100 y la tasa de IVA es 16%, la función debe retornar $16.
// Si el precio del producto es $200 y la tasa de IVA es 10%, la función debe retornar $20.

let a=Number(prompt("Selecciona el precio del producto sin IVA "))
let b= Number(prompt("Escribe la tasa de IVA"))
function calcularIva(a,b) {
    return a+(a*b/100)
}
calcularIva(a,b)

// 2. Convertir una fecha de formato DD/MM/AAAA a AAAA-MM-DD:
// Descripción:
// Debes crear una función que convierta una fecha de formato DD/MM/AAAA a AAAA-MM-DD.
// La función debe recibir un argumento: la fecha en formato DD/MM/AAAA.
// La función debe retornar la fecha en formato AAAA-MM-DD.
// Tipo de función: Tradicional o arrow
// Ejemplos:
// Si la fecha es "01/01/2023", la función debe retornar "2023-01-01".
// Si la fecha es "31/12/2024", la función debe retornar "2024-12-31".
let fecha=prompt("Escribe la fecha en formato DD/MM/AAAA")
let convertirFecha = (fecha) => {
    let [dia, mes, año] = fecha.split('/');
    let nuevaFecha = `${año}-${mes}-${dia}`;
    return nuevaFecha;
}
convertirFecha(fecha)

// 3. Calcular el área de un triángulo:
// Descripción:
// Debes crear una función que calcule el área de un triángulo.
// La función debe recibir dos argumentos: la base y la altura del triángulo.
// La función debe retornar el área del triángulo.
// Tipo de función: Función anónima
// Ejemplos:
// Si la base del triángulo es 5 cm y la altura es 10 cm, la función debe retornar 25 cm^2.
// Si la base del triángulo es 10 cm y la altura es 15 cm, la función debe retornar 75 cm^2.
let base=Number(prompt("Cuánto mide la base del triangulo en cm"))
let altura=Number(prompt("Cuánto mide la altura del triangulo en cm"))
let CalcularAreaTriangulo = function(base, altura){
    return (base*altura/2)+" cm^2"
}
CalcularAreaTriangulo(base, altura);


// 4. Determinar si un número es par o impar:
// Descripción:
// Debes crear una función que determine si un número es par o impar.
// La función debe recibir un argumento: el número.
// La función debe retornar true si el número es par y false si es impar.
// Tipo de función: Función arrow
// Ejemplos:
// Si el número es 10, la función debe retornar true.
// Si el número es 11, la función debe retornar false.
let num= Number(prompt("Escribe un numero para saber si es par o impar"))
let ParOImpar= (num) => {
    if (num%2==0) {
        return("Es par")
    } else {return("Es impar")}
}
ParOImpar(num);

// 5. Calcular la suma de dos números:
// Descripción:
// Debes crear una función que calcule la suma de dos números.
// La función debe recibir dos argumentos: los dos números.
// La función debe retornar la suma de los dos números.
// Tipo de función: Función tradicional
// Ejemplos:
// Si los números son 1 y 2, la función debe retornar 3.
// Si los números son 5 y 10, la función debe retornar 15.
let x1=Number(prompt("Escribe el primer numero a sumar"))
let x2=Number(prompt("Escribe el segundo numero a sumar"))
function Sumar(x1,x2) {
    return x1+x2;
}
Sumar(x1,x2);
