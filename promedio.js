function calcularMediaAritmetica(lista){
//    let sumaLista = 0;
// for(let i=0; i < lista.length; i++){
//     sumaLista = sumaLista + lista[i];
// }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return parseInt(valorAcumulado) + parseInt(nuevoElemento);
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
function calculaPromedio(){
    const promediototal = calcularMediaAritmetica(array);
    if (array == "") alert("no has escrito nada");
    else{
        const getParrafo = document.getElementById("parrafoSalidaPromedio");
        getParrafo.innerText= promediototal;
    }
    
}
const array = [];
function agregaArrayPromedio(){
    const input = document.getElementById("agregaPromedio");
    const input1 = document.getElementById("arrayPromedio");
    const value = input.value;
    array.push(value);
    input1.innerText = "[" + array +"]";
}
function agregaArrayAutomaticoPromedio(){
    const input = document.getElementById("listaPromedio");
    const input1 = document.getElementById("arrayPromedio");
    const value = input.value;
    for(let i=0; i<value.length; i++){
        if(value[i] != " "){
            array.push(value[i]);
        }
        
    }
    
    input1.innerText = "[" + array +"]";
}