### Variables y operaciones

- ¿Qué es una variable y para qué sirve?
Una variable es un espacio en la memoria que sirve para almacenar un tipo de dato

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
Declarar la variable es reservar un espacio en la memoria, pero inicializarla es llenar ese espacio con un tipo de dato

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
Sumar numeros es unir dos variables de tipo Number, concatenar Strings en unir dos variables de tipo String o cadena de texto

- ¿Cuál operador me permite sumar o concatenar?
El operador de suma +

#### Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
    let nombre = 'Alejito';
    let apellido = 'Menendez';
    let nombreUsuario = 'MenendezAlejito';
    let edad = 17;
    let email = 'menendezalejito@mail.com';
    let mayorEdad = false;
    let dineroAhorrado = 100;
    let deudas = 500;


#### Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior
    let nombreCompleto = `${nombre} ${apellido}`;
    let dineroReal = dineroAhorrado - deudas;

### Funciones
- ¿Qué es una función?
Una funcion es un bloque de codigo 

- ¿Cuándo me sirve usar una función en mi código?
Me sirve para reutilizar su logica en cualquier parte de mi programa

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
Parametros son las variables que estan en la definicion de la funcion, los argumentos son los datos que se pasan como parametros de esa funcion

- Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:


		const name = "Juan David";
		const lastname = "Castro Gallego";
		const completeName = name + lastname;
		const nickname = "juandc";

		console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
-----------
      const Name = (name, lastName, nickName) =>{
        		const completName = `${name} ${lastName}`;
        		return `Mi nombre es ${completName} pero prefiero que me digas ${nickName}`
        }
        
        	console.log(Name("Luis", "Herrera", "LuisErre"));

### Condicionales
- ¿Qué es una condicional?
Una instruccion que evalua una condicion si es verdadera o no

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
if, else if, else, switch, ternario

- ¿Puedo combinar funciones y condicionales?
Si

Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

    const tipoDeSuscripcion = "basic";
    
    switch (tipoDeSuscripcion) {
       case "Free":
           console.log("Solo puedes tomar los cursos gratis");
           break;
       case "Basic":
           console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
           break;
       case "Expert":
           console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
           break;
       case "Free":
           console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
           break;
    }
	
---
    const tipoDeSuscripcion = prompt("Ingresa tu tipo de suscripcion");
    
    if (tipoDeSuscripcion === "Free"){
    	console.log("Solo puedes tomar los cursos gratuitos");
    }
    else if (tipoDeSuscripcion === "Basic"){
    	console.log("Puedes tomar casi todos los cursos de Platzi");
    }
    
    else if (tipoDeSuscripcion === "Expert"){
    	console.log("Puedes tomar casi todos los cursos de Platzi por un anio");
    }
    
    else (tipodeSuscripcion === "Expert+"){
    	console.log("Tu y alguien mas pueden tomar todos los cursos de Platzi durante un anio");
    }
    


### Ciclos
- ¿Qué es un ciclo?
Un bloque de codigo que se repite n veces

- ¿Qué tipos de ciclos existen en JavaScript?
while, do-while, for, for in, 

- ¿Qué es un ciclo infinito y por qué es un problema?
Nunca se detendra, por lo que puede consumir grandes cantidades de memoria

- ¿Puedo mezclar ciclos y condicionales?
Si.

Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

	for (let i = 0; i < 5; i++) {
		console.log("El valor de i es: " + i);
	}
	for (let i = 10; i >= 2; i--) {
		console.log("El valor de i es: " + i);
	}

---
    let i = 0;
    while (i < 5) {
    		   console.log("El valor de i es: " + i);
    		   i++;
    		   }
    
    let j = 10;
    while (j >=2){
    	console.log("El valor de j es: " + j);
    	j--
    }

- Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

---
    let question = 0;
    
    do {
    	question = prompt("Cuanto es 2 + 2");
    	question *=1;
    } while (question != 4)


### Listas 

- ¿Qué es un array?
Un array es una variable que guarda un conjunto de valores de un mismo tipo

- ¿Qué es un objeto?
Un objeto es una coleccion de propiedades

- ¿Cuándo es mejor usar objetos o arrays?
Dependiendo del problema

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Si

- Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

		const unaFuncion = (array) => {
		  console.log(array[0]);
		};
    

- Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

		let frutas = ['Pera', 'Manzana', 'Sandia'];
		const unaFuncion = (array) => {
			console.log(array);
		};
    
 	   unaFuncion(frutas);

- Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

		let persona = {
		  nombre: 'Oscar',
		  apellido: 'Aguilar',
		  edad: 21
		}
		const unaFuncion = (objeto) => {
			console.log(objeto);
		};

		unaFuncion(persona);

## Taller #1: figuras geométricas

- Primer paso: definir las fórmulas
- Segundo paso: implementar la fórmulas en JavaScript 
- Tercer paso: crear funciones
- Cuarto paso: integrar JS con HTML

## Taller #2: porcentaajes y descuentos

- Primer paso: definir las fórmulas
- Segundo paso: implementar la fórmulas en JavaScript 
- Tercer paso: crear funciones
- Cuarto paso: integrar JS con HTML

## Taller #3: promedio, mediana y moda

- Primer paso: definir las fórmulas
- Segundo paso: implementar la fórmulas en JavaScript 
- Tercer paso: crear funciones
- Cuarto paso: integrar JS con HTML
# curso-practico-javascript