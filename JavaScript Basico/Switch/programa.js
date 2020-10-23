function determinarDiaSegunFecha(entrada){
    var fechaTexto=null;
    //convertimos la entrada a un objeto de tipo fecha
    var fecha =  new Date(entrada.value);

    var dia = fecha.getDay();

    switch(dia){
        case 0:
            fechaTexto="El día es Lunes";
            break;
        case 1:
            fechaTexto="El día es Martes";
            break;
         case 2:
            fechaTexto="El día es Miercoles";
            break;
         case 3:
            fechaTexto="El día es Jueves";
            break;
         case 4:
            fechaTexto="El día es Viernes";
            break;
         case 5:
            fechaTexto="El día es Sabado";
            break;
         case 6:
            fechaTexto="El día es Domingo";
            break;
        default:
            fechaTexto="Valor no valido";
    }
    document.getElementById("resultado").innerHTML=fechaTexto;
}