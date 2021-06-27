// Codigo del cuadrado

console.group("Cuadrados");

const sideSquare = 5;

const perimeterSquare = sideSquare * 4;

const areaSquare = sideSquare * sideSquare;

console.log(`Los lados del cuadrados son ${sideSquare} cms`);

console.log(`El perimetros del cuadrado es ${perimeterSquare} cms`)

console.log(`El area del cuadro es ${areaSquare} cms^2`)

console.groupEnd();

// Codigo del triangulo

console.group("Triangulos");

const baseTriangle = 4;
const sideTriangle1 = 6;
const sideTriangle2 = 6;
const heightTriangle = 5.5;

console.log(`Los lados del triangulo son ${sideTriangle1} cms, ${sideTriangle2} cms y su base es ${baseTriangle} cms`)

const areaTriangle = (baseTriangle * heightTriangle)/2;
console.log(`El area del triangulo es  ${areaTriangle}`);

const perimeterTriangle = baseTriangle + sideTriangle1 + sideTriangle2;
console.log(`El perimetro del triangulo es ${perimeterTriangle} cms`)

console.groupEnd();

// Codigo del circulo 

console.group("Circle");

const radio = 4;

const diameterCircle = radio * 2;

const PI = Math.PI; 

const perimeterCircle = diameterCircle * PI;

const areaCircle = radio * radio * PI; 

console.log (`El radio del circulo es ${radio} cms`);

console.log(`El diametro del circulo es ${diameterCircle} cms`);

console.log(`El perimetro del circulo es ${perimeterCircle} cms`);

console.log(`El area del circulo es ${areaCircle} cms^2`);

console.groupEnd();
