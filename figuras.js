//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado meden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
//console.log("El perimetro del cuadrado es : " + perimetroCuadrado + " cm");

function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

// código del triángulo
console.group("Triángulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//console.log("los lados del triangulo miden: " 
//            + ladoTriangulo1 
//            + "cm, "
//            +ladoTriangulo2 
//            + "cm, "
//            +baseTriangulo 
//            + "cm");

//console.log("El perímtro del triangulo es: " 
//+ ladoTriangulo1 
//            + ladoTriangulo2 
//            + baseTriangulo 
//            + "cm");
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura)/2;
} 
//console.log("El área de nuestro Triángulo es: " + areatriangulo);
console.groupEnd();
//Código del circulo
console.group("Círculos");
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + " cm");
function diametroCirculo(radio){
    return radio * 2;
}
//console.log("El diametro del circulo es: " + diametroCirculo + " cm");
const PI =  Math.PI;
//console.log("PI es: " + PI);
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");
function areaCirculo(radio){
    return (radio*radio)*PI;

}
//console.log("El area del circulo es: " + areaCirculo + "cm^2");
 
console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("Inputlado1triangulo");
    const input2 = document.getElementById("Inputlado2triangulo");
    const input3 = document.getElementById("Inputbasetriangulo");
    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const base = parseInt(input3.value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input = document.getElementById("Inputbasetriangulo");
    const input2 = document.getElementById("Inputalturatriangulo");
    const value = input.value;
    const value2 = input2.value;
    const area = areaTriangulo(value, value2);
    alert(area);
}
function calcularPerimetroTriangulois(){
    const input1 = document.getElementById("Inputlado1triangulois");
    const input2 = document.getElementById("Inputlado2triangulois");
    const input3 = document.getElementById("Inputbasetriangulois");
    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const base = parseInt(input3.value);
    if(lado1 == lado2){
        const perimetro = perimetroTriangulo(lado1, lado2, base);
        alert(perimetro);
    }
    else{
        alert("El lado 1 y el lado 2 deben de ser igaules");
    }
}
function calcularAreaTriangulois(){
    const base = document.getElementById("Inputbasetriangulois");
    const input1 = document.getElementById("Inputlado1triangulois");
    const input3 = document.getElementById("Inputlado2triangulois");
    const value = parseInt(base.value);
    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input3.value);
    if(lado1 == lado2){
        const altura = Math.sqrt((lado1 * lado1)-((value * value)/4));
        const alturaP = document.getElementById("alturaParrafo");
        alturaP.innerText = parseFloat(altura);

        const area = areaTriangulo(value, altura);
        alert(area);
    }
    else{
        alert("El lado 1 y el lado 2 deben de ser igaules");
    }
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const perimetro = areaCirculo(value);
    alert(perimetro);
}
