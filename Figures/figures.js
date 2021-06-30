// Codigo del cuadrado

console.group("Cuadrados");

const perimeterSquare = (lado) => {
    return lado * 4;
}

const areaSquare = (lado) => {
    return lado * lado;
}

console.groupEnd();

// Codigo del triangulo

console.group("Triangulos");

const perimeterTriangle = (lado1, lado2, base) => {
    return lado1 + lado2 + base;
}

const areaTriangle = (base, altura) =>{
    return (base * altura)/2;
}


console.groupEnd();

// Codigo del circulo 

console.group("Circle");

const PI = Math.PI; 

const diameterCircle = (radio) => radio * 2;

const perimeterCircle = (radio) => diameterCircle(radio) * PI;

const areaCircle = (radio) => radio * radio * PI; 


console.groupEnd();

// Interation with html

/* SQUARE */

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");

    const value = input.value; //obtenemos el valor del input

    const perimeter = perimeterSquare(value);

    alert(perimeter);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");

    const value = input.value; //obtenemos el valor del input

    const area = areaSquare(value);

    alert(area);
}

/* TRIANGLE */

function calcularPerimetroTriangle(){
    const lado1 = parseInt(document.getElementById("inputSide1").value);
    const lado2 = parseInt(document.getElementById("inputSide2").value);
    const base = parseInt(document.getElementById("inputBase").value);

    alert(`El perimetro del triangulo es: ${lado1+lado2+base} cm`);
}

function calcularAreaTriangle(){
    const height = parseInt(document.getElementById("inputHeight").value);

    const base = parseInt(document.getElementById("inputBase").value);

    alert(`El area del triangulo es ${areaTriangle(base, height)} cms^2`);
}

function calcularHeightTriangle() {
    const side1 = parseInt(document.getElementById("isoSide1").value);
    const side2 = parseInt(document.getElementById("isoSide2").value);
    const base = parseInt(document.getElementById("isoBase").value);

    if (side1 == side2){
        let height = Math.sqrt((side1**2)-((base**2)/4));
        let result = `Este es un triangulo isosceles y su altura es ${height} cms`

        return result;

    } else {
        let noResult = alert (`Tu triangulo es cualquier otra cosa menos isosceles`);

        return noResult;
    }

}


/* CIRCLE */

function calcularPerimetroCircle(){
    const radio = parseInt(document.getElementById("radio").value);

    alert(`El perimetro del circulo es ${perimeterCircle(radio)} cms`);
}

function calcularAreaCircle(){
    const radio = parseInt(document.getElementById("radio").value);

    alert(`El area del circulo es ${areaCircle(radio)} cms^2`);
}