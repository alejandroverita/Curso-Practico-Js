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
