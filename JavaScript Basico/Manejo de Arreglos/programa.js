function limpiar() {
    document.getElementById("resultado").innerHTML = "";
}

function manejoArreglos() {
    var lengua = null;

    //Definimos el arreglo
    var lenguas = new Array();
    lenguas[0] = "Chino mandarin";
    lenguas[1] = "Español";
    lenguas[2] = "Ingles";
    lenguas[3] = "Hindi";

    //Recorremos el arreglo
    for (i = 0; i < lenguas.length; i++) {
        //Accedemos a cada elemento
        lengua = lenguas[i];
        //Imprimimos cada uno de los elementos
        imprimir(lengua);
    }
}

function imprimir(valor) {
    document.getElementById("resultado").innerHTML += valor + " ";
}