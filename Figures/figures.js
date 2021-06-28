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


/* CIRCLE */

function calcularPerimetroCircle(){
    const radio = parseInt(document.getElementById("radio").value);

    alert(`El perimetro del circulo es ${perimeterCircle(radio)} cms`);
}

function calcularAreaCircle(){
    const radio = parseInt(document.getElementById("radio").value);

    alert(`El area del circulo es ${areaCircle(radio)} cms^2`);
}