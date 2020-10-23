document.write("Programa manejo de operadores:<br/>");

//El operador = se ocupa para asignar 
var x = 5;
var y;
y = 6;
document.write("Valor de x:" + x + "<br/>");
document.write("Valor de y:" + y + "<br/>");

//Operador + se utiliza para sumar
var z = x + y;
document.write("Valor de z:" + z + "<br/>");

//Operador ++ se utiliza para incremetar en 1
x++;
document.write("Nuevo valor de x:" + x + "<br/>");

//Operador -- decrementa en 1
y--;
document.write("Nuevo valor de y:" + y + "<br/>");

//Operador += es como colocar x = x+y pero de forma reducida asi
x += y;
document.write("El valor de x es:" + x + "<br/>");

//El operador + igual sirve para concatenar dos cadenas
var texto1 = "hola";
var texto2 = " mundo";

document.write("Valor concatenado es:" + texto1 + texto2);