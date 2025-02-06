/*// arreglo que tiene las respuestas correctas
let correctas = [3,1,2,2,3];

//arreglo donde se guardan las respuestas del usuario
let opcion_elejida = [];
let cantidad_correctas = 0;

//funcion que toma num de la pregunta y el input elejido de esa pregunta
function respuesta(num_pregunta, seleccionada){
    opcion_elejida[num_pregunta] = seleccionada.value; //guardando la respuesta elejida

    id = "p" + num_pregunta; //se arma el id para seleccionar el section correspondiente

    //se le da color blanco a los inputs para cuando elijen otra opcion
    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "rgba(173, 31, 173, 0.93)";
    labels[5].style.backgroundColor = "rgba(173, 31, 173, 0.93)";
    labels[7].style.backgroundColor = "rgba(173, 31, 173, 0.93)";

    //se le da color al label seleccionada
    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

//funcion que compara los arreglos para saber cuantas estan correctas
function corregir(){
    cantidad_correctas = 0;
    for(i=0; i < correctas.length; i++){
        if(correctas[i]==opcion_elejida[i]){
            cantidad_correctas++;
        }
    }

    document.getElementById("resultado").innerHTML = cantidad_correctas;
}*/


let correctas = [3,1,3,2,3];
let opcion_elejida = [];
let cantidad_correctas = 0;

function respuesta(num_pregunta, seleccionada) {
    opcion_elejida[num_pregunta] = seleccionada.value;
    let id = "p" + num_pregunta;
    let labels = document.getElementById(id).querySelectorAll("label");

    // Restablecer los colores de todas las opciones
    labels.forEach(label => label.style.backgroundColor = "rgba(173, 31, 173, 0.93)");

    // Verificar si la respuesta es correcta o incorrecta
    if (parseInt(seleccionada.value) === correctas[num_pregunta]) {
        seleccionada.parentNode.style.backgroundColor = "#28a745"; // Verde para correcta
    } else {
        seleccionada.parentNode.style.backgroundColor = "#dc3545"; // Rojo para incorrecta
        // También marcar la correcta en verde automáticamente
        labels[correctas[num_pregunta] - 1].style.backgroundColor = "#28a745";
    }
}

function corregir() {
    cantidad_correctas = 0;
    for (let i = 0; i < correctas.length; i++) {
        if (correctas[i] == opcion_elejida[i]) {
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}
