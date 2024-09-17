const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let constraseña = document.getElementById("contrasena");

function generar(){

    let numeroDigitado = parseInt(cantidad.value);
    if (numeroDigitado < 8)  {
        alert("La cantidad de caracteres debe de ser mayor que 8");
        return;
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    constraseña.value = password;
    validarFortaleza(password);
}

function limpiar() {
    cantidad.value = '';
    constraseña.value = '';
    document.getElementById("mensaje").innerText = '';
}

function validarFortaleza(password) {
    const mayusculas = /[A-Z]/.test(password);
    const minusculas = /[a-z]/.test(password);
    const numeros = /\d/.test(password);
    const especiales = /[!@#$%^&*()]/.test(password);

    let mensaje = '';
    let color = '';

    if (mayusculas && minusculas && numeros && especiales && password.length >= 8) {
        mensaje = '* Contraseña fuerte';
        color = 'green';
    }
    else if ((mayusculas || minusculas) && (numeros || especiales) && password.length >= 8) {
        mensaje = '* Contraseña media';
        color = 'orange';
    }
    else if ((mayusculas || minusculas) || (numeros || especiales)){
        mensaje = '* Contraseña débil';
        color = 'red';
    }
    else {
        mensaje = "No hay constrseña";
    }

    const mensajeElement = document.getElementById("mensaje");
    mensajeElement.innerText = mensaje;
    mensajeElement.style.color = color;
}
