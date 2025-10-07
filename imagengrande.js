var imagenActual = 1;

function cambiar(numeroDeImagen) {
    imagenActual = numeroDeImagen;
    let imagen = document.getElementById("imagen");

    switch (imagenActual) {
        case 1:
            imagen.src = "IMG/bienvenida.png";
            break;
        case 2:
            imagen.src = "IMG/servicios.png";
            break;
        case 3:
            imagen.src = "IMG/registro.png";
            break;
        case 4:
            imagen.src = "IMG/inisesion.png";
            break;
        case 5:
            imagen.src = "IMG/inicio.png";
            break;
        case 6:
            imagen.src = "IMG/porcino.png";
            break;
        case 7:
            imagen.src = "IMG/";
            break;
        case 8:
            imagen.src = "Img/boleta_int.jpg";
            break;
        default:
    }
}