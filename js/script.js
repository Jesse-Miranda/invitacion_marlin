let ejecutado = false;

function abrirInvitacion() {
    const liston = document.getElementById('miListon');
    const tarjeta = document.getElementById('invitacionCard');

    if (!ejecutado) {
        // Ejecuta la animación de salida del listón
        liston.classList.add('remover-todo');
        
        // Abre la solapa después de un pequeño retraso
        setTimeout(() => {
            tarjeta.classList.add('abierta');
        }, 400);

        // Elimina el listón del código después de que termine su animación para limpiar
        setTimeout(() => {
            liston.remove();
        }, 1600);
        
        ejecutado = true;
    } else {
        // Permite abrir y cerrar si ya se ejecutó la primera vez
        tarjeta.classList.toggle('abierta');
    }
}