document.write("Programa para contar el número de digitos de un número entero positivo: <br/>");

var num = parseInt(prompt("Ingrese un número entero postivo", 1));
var contadorDigitos = 0;


while (num >= 1) {
    num = num / 10
    contadorDigitos = contadorDigitos + 1;
}
console.log(contadorDigitos);

document.write("El número contiene: " + contadorDigitos + " digitos");