/**
 * ALUVA - Script de Validación para Bootstrap 4 & Assan v3.8
 */
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const inputNombre = document.getElementById('nombre');
    const inputEmail = document.getElementById('email');
    const inputMensaje = document.getElementById('mensaje');
    const formFeedback = document.getElementById('formFeedback');

    function validarNombre() {
        if (inputNombre.value.trim() === '') {
            inputNombre.classList.add('is-invalid');
            inputNombre.classList.remove('is-valid');
            return false;
        } else {
            inputNombre.classList.remove('is-invalid');
            inputNombre.classList.add('is-valid');
            return true;
        }
    }

    function validarEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (inputEmail.value.trim() === '' || !emailRegex.test(inputEmail.value.trim())) {
            inputEmail.classList.add('is-invalid');
            inputEmail.classList.remove('is-valid');
            return false;
        } else {
            inputEmail.classList.remove('is-invalid');
            inputEmail.classList.add('is-valid');
            return true;
        }
    }

    function validarMensaje() {
        if (inputMensaje.value.trim() === '') {
            inputMensaje.classList.add('is-invalid');
            inputMensaje.classList.remove('is-valid');
            return false;
        } else {
            inputMensaje.classList.remove('is-invalid');
            inputMensaje.classList.add('is-valid');
            return true;
        }
    }

    // Eventos Blur
    inputNombre.addEventListener('blur', validarNombre);
    inputEmail.addEventListener('blur', validarEmail);
    inputMensaje.addEventListener('blur', validarMensaje);

    // Evento Submit
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const vNombre = validarNombre();
        const vEmail = validarEmail();
        const vMensaje = validarMensaje();

        if (vNombre && vEmail && vMensaje) {
            formFeedback.innerHTML = '<div class="alert alert-success">¡Gracias por contactar a ALUVA! Tu solicitud fue enviada correctamente.</div>';
            contactForm.reset();
            
            inputNombre.classList.remove('is-valid');
            inputEmail.classList.remove('is-valid');
            inputMensaje.classList.remove('is-valid');

            setTimeout(() => {
                formFeedback.innerHTML = '';
            }, 5000);
        } else {
            formFeedback.innerHTML = '<div class="alert alert-danger">Por favor, completa correctamente los campos obligatorios.</div>';
        }
    });
});