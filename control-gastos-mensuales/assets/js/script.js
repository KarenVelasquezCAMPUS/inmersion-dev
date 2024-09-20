let listaNombresGastos = []; 
let listaValoresGastos = [];
let listaDescripcionesGastos = [];
let indiceEdicion = -1; 

function clickbtn() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    
    if (indiceEdicion === -1) {
        listaNombresGastos.push(nombreGasto);
        listaDescripcionesGastos.push(descripcionGasto); 
        listaValoresGastos.push(valorGasto);
    } else {
        listaNombresGastos[indiceEdicion] = nombreGasto;
        listaDescripcionesGastos[indiceEdicion] = descripcionGasto;
        listaValoresGastos[indiceEdicion] = valorGasto;
        
        indiceEdicion = -1;
        document.getElementById('botonFormulario').innerText = 'Agregar Gasto';
    }

    actualizarListaGastos(); 
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');

    let htmlLista = '';
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => { 
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcionGasto = listaDescripcionesGastos[posicion]; 
        htmlLista += `<li>
                        <strong>${elemento}</strong> 
                        <p>${descripcionGasto}</p> 
                        ${valorGasto.toFixed(2)} USD
                        <button onclick="editarGasto(${posicion});">Editar</button> 
                        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                      </li>`; 
        totalGastos += valorGasto;
    });

    listaElementos.innerHTML = htmlLista;   
    totalElementos.innerHTML = totalGastos.toFixed(2); 

    if (totalGastos > 150) {
        alert('¡Cuidado! El total de los gastos ha superado los 150 USD.');
    }
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('descripcionGasto').value = ''; 
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion) { 
    listaNombresGastos.splice(posicion, 1); 
    listaDescripcionesGastos.splice(posicion, 1); 
    listaValoresGastos.splice(posicion, 1);

    actualizarListaGastos();
}

function editarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionesGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('botonFormulario').innerText = 'Actualizar Gasto';

    indiceEdicion = posicion;
}