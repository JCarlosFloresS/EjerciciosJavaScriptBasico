var nombre = null;

function mostrarNombre(parametro) {
    nombre = parametro.value;
    var saludo = "Hola " + nombre.toUpperCase();

    document.getElementById("resultado").innerHTML = saludo;
}

function saludarLocal(parametro) {
    var nombre = parametro;
    alert("Hola " + nombre + "(local)");

    alert("Hola" + this.nombre + "(global)");
}