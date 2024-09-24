let listaNombresGastos = [];
let listaValoresGastos = [];

//Esta función se invoca al momento de que el usuario hace click en el boton
function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);

    //console.log(listaNombresGastos);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    //alert('Click del usuario');

    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento,posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        //console.log(elemento);
        //console.log(posicion);
        //htmlLista += "<li>" + elemento + "</li>";
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        </li>`;
        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);
        //console.log(totalGastos);
    });
    //console.log(htmlLista);
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion) {
    //console.log(posicion);
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}