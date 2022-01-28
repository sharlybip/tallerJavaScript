function calcularMediaAritmetica(inputOriginal){
        const sumaLista =  inputOriginal.reduce(
            function (valorAcumulado = 0, nuevoElemento){
                return parseInt(valorAcumulado) + parseInt(nuevoElemento);
            }
        );
        
        const promedioLista = sumaLista / inputOriginal.length;
        console.log(promedioLista);
        return promedioLista;
    }
function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}
function calcularMediana(lista){
    listaOrdenada = lista.sort(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado - nuevoValor;
        }
    );
    console.log(listaOrdenada)
    const mitadLista1 = parseInt(listaOrdenada.length / 2);
    let mediana;

    if (esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista1];
        const elemento2 = listaOrdenada[mitadLista1 - 1];
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElemento1y2;

    } else {
        
        mediana = listaOrdenada[mitadLista1];
    }
    console.log(mediana);
    return mediana;
    
}


function calculaMediana(){
    const medianatotal = calcularMediana(array1);
    if (array1 == "") alert("no has escrito nada");
    else{
        const getParrafo = document.getElementById("parrafoSalidaMediana");
        getParrafo.innerText= medianatotal;
    }
    
}
const array1 = [];
function agregaArrayMediana(){
    const input = document.getElementById("agregaMediana");
    const input1 = document.getElementById("arrayMediana");
    const value = input.value;
    array1.push(value);
    input1.innerText = "[" + array1 +"]";
}
function agregaArrayAutomaticoMediana(){
    const input = document.getElementById("listaMediana");
    const input1 = document.getElementById("arrayMediana");
    const value = input.value;
    console.log(value);
    for(let i=0; i<value.length; i++){
        if(value[i] != " "){
            array1.push(value[i]);
        }
        
    }
    
    input1.innerText = "[" + array1 +"]";
}