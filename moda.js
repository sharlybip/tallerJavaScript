function listaModa(lista){
    const lista1Count = {};
    lista.map(
        function (elemento) {
            console.log(elemento);
            if (lista1Count[elemento]){
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(lista1Count).sort(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = listaArray[listaArray.length - 1 ];
    return moda;
}

function calculaModa(){
    const calcularModa = listaModa(array2);
    if (array2 == "") alert("no has escrito nada");
    const getParrafo = document.getElementById("parrafoSalida");
    getParrafo.innerText= calcularModa[0] + ":" + calcularModa[1];
}
const array2 = [];
function agregaArray(){
    const input = document.getElementById("agrega");
    const input1 = document.getElementById("array");
    const value = input.value;
    array2.push(value);
    input1.innerText = "[" + array2 +"]";
}
function agregaArrayAutomatico(){
    const input = document.getElementById("lista");
    const input1 = document.getElementById("array");
    const value = input.value;
    console.log(value);
    for(let i=0; i<value.length; i++){
        if(value[i] != " "){
            array2.push(value[i]);
        }
        
    }
    
    input1.innerText = "[" + array2 +"]";
}