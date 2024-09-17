// tipos de datos y variables
var int = 8; // var esta deprecada
let texto = "texto"; // let remplaza a var 
const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // const se usa para constantes

//  visualizar tipo de dato 
console.log("tipo de dato para texto:", typeof texto);
console.log("tipo de dato para int:", typeof int);

// traer un dato de html a js
let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let constraseña = document.getElementById("contrasena");

// funciones
function generar(){

    let numeroDigitado = parseInt(cantidad.value);

    /* condicionales 

        - si no usamos las llaves despues de declarar el if solo se va a ejecutar una linea que es la siguiente a el, mientras que con llaves podemos ejecutar un bloque total */

    if (numeroDigitado < 8)  {
        alert("La cantidad de caracteres debe de ser mayor que 8")
    }

    let password = '';

    /* bucles

        - for: lo importante de la estructura del for es que debe de tener el incializador que es el indice (i), la condicion y el contador */

    for (let i = 0; i < numeroDigitado; i++) {
        caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            // Math.floor() es una funcion que nos ayuda redondear un numero
            // Math.random() es una funcion la cual nos genera una operacion aleatoria
            // lenght nos mide la longitud/tamaño de la variable

            password += caracterAleatorio;
            // += concatenamos el caracter a la cadena
    }

    constraseña.value = password;
    // visualizar la contraseña en el input para ver la constraseña en la interfaz
}