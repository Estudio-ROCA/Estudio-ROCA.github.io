// main.js - Lógica para Modal de Portafolio
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal-galeria");
    const imgModal = document.getElementById("img-modal");
    const imagenes = document.querySelectorAll(".portafolio-img");
    const spanCerrar = document.querySelector(".cerrar-modal");

    // Abrir modal al hacer clic en cualquier imagen del portafolio
    imagenes.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            imgModal.src = this.src; // Pasa la ruta de la imagen clickeada al modal
        });
    });

    // Cerrar modal al hacer clic en la "X"
    spanCerrar.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Cerrar modal al hacer clic fuera de la imagen (en el fondo oscuro)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
