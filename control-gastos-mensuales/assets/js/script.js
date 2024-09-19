let listaNombresGastos = []; // convertimos la variable en un arreglo, ya que va a traer datos multiples en el
let listaValoresGastos = [];

// Esta función se invoca a la hora de darle click al botón Agregar Gasto
function clickbtn() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    
    // Lista vacia
    console.log(listaNombresGastos);
    
    // El elemento push lo que hace es por decirlo asi "empujar" el dato escrito en el campo
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    // Lista con un valor agregado por el push
    console.log(listaNombresGastos);

    actualizarListaGastos(); // Llamamos la segunda funcion en la primera para poder hacer que cada vez que se genere un gasto se actulice la lista de este
}

function actualizarListaGastos() {
    // traer el dato
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos =  document.getElementById('totalGastos');
    // crear un "nuevo html"
    let htmlLista = '';
    let totalGastos = 0;
    // necesitamos recoger/recorrer el arreglo
    listaNombresGastos.forEach((elemento, posicion) => { // ¿Qué son Parametros? Valores que se van pasando a las funciones para que la funcion la utilice dentro de ella
        const valorGasto = Number(listaValoresGastos[posicion]);
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} <button onclick="eliminarGasto(${posicion});">Eliminar</button></li>`; // Templeate String
        // Calcular el total de gasatos
        totalGastos += Number(valorGasto);
    });

    listaElementos.innerHTML = htmlLista; // Cambio de HTML al realizado por el js    
    totalElementos.innerHTML = totalGastos.toFixed(2); // toFixed es una funcion de js para poder definir cantidad de decimales que quiero mostrar

    limpiar();
}

// limpar el campo 
function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

// eliminar gastos
function eliminarGasto(posicion) { // ! Argumento cuando se llama (por ejemplo, a la hora de pasarle el dato en el onclick a la función) y parametro es el que se reibe en la función
    listaNombresGastos.splice(posicion, 1); // Splice es lo que nos ayuda a eliminar un arreglo
    listaValoresGastos.splice(posicion, 1);

    actualizarListaGastos();
}

/* Desafios
    - Alerta de limite de gastos mayores a 150 USD
    - Agregar una descripción más detallada debajo del nombre del gastos
    - Agregar btn de editar gasto al lado del btn de Eliminar en el gastos (que diga actualizar) */