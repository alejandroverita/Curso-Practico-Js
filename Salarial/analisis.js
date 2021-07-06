//utils

const esPar = (number) => number % 2 === 0


const salariosCol = colombia.map( //salarios.js
    function (persona) {
        return persona.salary;  
    }
);


const salariosColSorted = salariosCol.sort( //sort ordena una lista
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);



/* PROMEDIO */

const promedio = (lista) => {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


//MEDIANA
const medianaSalarios = (lista) => {
    const mitad = parseInt(lista.length / 2);

    /* llama a la funcion esPar y pasa por parametro la longitud del array */
    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista [mitad];

        const mediana = promedio([personaMitad1, personaMitad2]);
        
        return mediana;
    }
    else {
        /* es igual a la posicion de la mitad en nuestra lista usando la variable mitad */
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


// MEDIANA TOP 10%

//salariosColSorted es la lista ordenada **IMPORTANTE**

//creando variables para cada uno de los elementos que colocare en la funcion splice
const spliceStart = (salariosColSorted.length * 90)/100 // cantidad de elementos que hay en el array. Empieza en 90%

const spliceCount = salariosColSorted.length - spliceStart; //ej: salarioscolSorted.length = 20 - spliceStart = 18 : spliceCount = 2 que es igual al 10% superior

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
); //splice recibe 2 parametros: 1 el lugar del corte, 2 la cantidad de elementos a eliminar


const medianaGeneralCol = medianaSalarios(salariosColSorted);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol, 
    medianaTop10Col,
});



/*----------------------- CALCULO DE INTERESES */


/* HELPERS */

const redondeoAlCentesimo = (numero)=> {
    // Formula redondeo al centesimo
    numero = Math.round((numero + Number.EPSILON) * 100) / 100;
    return numero;
}

const investmentWithSimpleInterest = (
    startAmount,
    interestPercentage,
    timeYears
  ) => {
    let capital = Number(startAmount);
    let tiempo = Number(timeYears);
    let tasaDeInteres = Number(interestPercentage / 100);
    // Calculamos el interes simple
    let interesSimple = capital * tasaDeInteres * tiempo;
    let montoFinal = capital + interesSimple;
    return Number(montoFinal);
}

const investmentWithCompoundInterest = (
    startAmount,
    interestPercentage,
    timeYears
  ) => {
    let capital = Number(startAmount);
    let tiempo = Number(timeYears);
    let tasaDeInteres = Number(interestPercentage / 100);
    // Calculamos el monto final con interes compuesto
    let montoFinal = capital * (1 + tasaDeInteres) ** tiempo;
    return Number(montoFinal);
}

/* Boton Reset */

const reset = () => {
    let inputAmount = document.getElementById("input-amount").value;
    let inputTime = document.getElementById("input-time").value;
    let inputInterest = document.getElementById("input-interest").value;
    let inputTypeInterest = document.getElementById("type-interest").value;

    inputAmount = "";

    inputTime = "";

    inputInterest = "";

    inputTypeInterest = "simple";


}

/* Boton calcular */

const calculate = () => {
    let inputAmount = document.getElementById("input-amount").value;
    let inputTime = document.getElementById("input-time").value;
    let inputInterest = document.getElementById("input-interest").value;
    let inputTypeInterest = document.getElementById("type-interest").value;

    /* el cuadro de las respuestas */
    const textResultado = document.getElementById("answer");


    if (inputAmount !== "" && inputTime !== "" && inputInterest !== ""){
        let resultado = 0;

        if(inputTypeInterest === "simple"){

           /* llamado a la funcion interes simple */
            resultado = investmentWithSimpleInterest(inputAmount, inputInterest, inputTime)

            /* llamadoo a la funcion de redondear */
            resultado = redondeoAlCentesimo(resultado);
    
            textResultado.innerHTML= `Your investment with initial capital of ${inputAmount} and simple annual  interest of ${inputInterest}% over ${inputTime} years will be <span>$${resultado}</span>`;
        }

        else if(inputTypeInterest === "compound"){

            resultado = investmentWithCompoundInterest(inputAmount, inputInterest, inputTime);

            resultado = redondeoAlCentesimo(resultado);
            textResultado.innerHTML = `Your investment with initial capital of $${inputAmount} and compound annual interest of ${inputInterest}% over ${inputTime} years will be <span>$${resultado}</span>`;
        }
    
    }

    else {
            textResultado.innerHTML = 'Missing Data ‼';
    }
    
}