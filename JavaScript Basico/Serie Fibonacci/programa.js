function serieFibonacci(entrada) {
    limpiar();

    //Asignamos los valores iniciales
    var a = 0;
    var b = 1;
    var c = null;
    var noMaximoElementos = 100;
    var elementosSerie = entrada.value;

    //Validamos
    if (elementosSerie > noMaximoElementos) {
        imprimir("Intenta con menos de 100 elementos");
        return;
    }
    //Imprimos los valores iniciales
    imprimir(a);
    imprimir(b);

    //realizamos la iteracion
    for (i = 0; i < elementosSerie - 2; i++) {
        c = a + b;
        a = b;//Respaldando valores
        b = c;
        imprimir(c);
    }
}

function imprimir(valor){
    document.getElementById("resultado").innerHTML += valor + " ";
}

function limpiar(){
    document.getElementById("resultado").innerHTML="";
}