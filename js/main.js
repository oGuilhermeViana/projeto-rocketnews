const botton = document.querySelector('#btn');
const email = document.querySelector('#email')
function enviar() {
    alert('Enviado')
    email.value = '';
}

botton.addEventListener('click', enviar)