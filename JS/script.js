// Configuración de imagen principal
const imagen_principal = document.getElementById('alejandra');
imagen_principal.style.display = 'flex';
imagen_principal.style.margin = '20px auto';
imagen_principal.style.padding = '10px';
imagen_principal.style.boxShadow = '0 0 30px rgba(7, 220, 206, 0.7)';
imagen_principal.style.objectFit = 'cover';
imagen_principal.style.width = '800px';
imagen_principal.style.height = '350px';
imagen_principal.style.border = 'solid 4px black';
imagen_principal.style.borderRadius = '10px';

// Configuración miniaturas
const miniaturas = ['ale', 'dav', 'nata', 'feli', 'and', 'geral'];
miniaturas.forEach(id => {
    const img = document.getElementById(id);
    img.style.width = '120px';
    img.style.height = '90px';
    img.style.border = 'solid 4px black';
    img.style.borderRadius = '10px';
});

// Botones navegación
document.getElementById('nav').style.display = 'flex';
document.getElementById('nav').style.justifyContent = 'center';
document.getElementById('nav').style.flexWrap = 'wrap';

document.getElementById('botons').style.display = 'flex';
document.getElementById('botons').style.justifyContent = 'center';
document.getElementById('botons').style.margin = 'auto';

document.getElementById('left').style.width = '40px';
document.getElementById('left').style.height = '60px';
document.getElementById('left').style.borderRadius = '10px';
document.getElementById('left').style.cursor = 'pointer';

document.getElementById('right').style.width = '40px';
document.getElementById('right').style.height = '60px';
document.getElementById('right').style.borderRadius = '10px';
document.getElementById('right').style.cursor = 'pointer';

// Cambio de imagen con animación
let imagenactual = 1;
function cambiarimagen(numero) {
    const imagenPrincipal = document.getElementById('alejandra');
    imagenPrincipal.style.opacity = '0';
    setTimeout(() => {
        if (numero === 1) imagenPrincipal.src = 'IMG/alejandra.jpg';
        else if (numero === 2) imagenPrincipal.src = 'IMG/andry.jpg';
        else if (numero === 3) imagenPrincipal.src = 'IMG/natalia.jpg';
        else if (numero === 4) imagenPrincipal.src = 'IMG/felipe.jpg';
        else if (numero === 5) imagenPrincipal.src = 'IMG/david.jpg';
        else if (numero === 6) imagenPrincipal.src = 'IMG/Modelo Entidad-Relación.png';
        imagenactual = numero;
        document.getElementById('contador').textContent = `${numero} / 6`;
        imagenPrincipal.style.opacity = '1';
    }, 200);
}

function moverderecha() {
    imagenactual++;
    if (imagenactual > 6) imagenactual = 1;
    cambiarimagen(imagenactual);
}

function moverizquierda() {
    imagenactual--;
    if (imagenactual < 1) imagenactual = 6;
    cambiarimagen(imagenactual);
}

// Controles de teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') moverderecha();
    if (e.key === 'ArrowLeft') moverizquierda();
});
