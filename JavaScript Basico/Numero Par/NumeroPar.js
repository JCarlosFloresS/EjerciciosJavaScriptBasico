document.write("Programa para determinar si un numero es par: <br/>");

var num = parseInt(prompt("Ingrese un número entero:",1));

if(num >= 0){
    if(num % 2 == 0){
        document.write("El número es par");
    }
    else{
        document.write("El número no es par");
    }
}
else{
    document.write("Ingrese un número entero mayor a cero");
}
document.write("El número que ingreso fue:"+num);