const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr){
    const lista1 = [];
    console.group("Array");
    console.log(typeof(lista1));
    console.log(lista1)
    console.groupEnd();
    
    console.group("Conteo de lista")
    const lista1Count = {};
    console.log(typeof(lista1Count));
    console.log(lista1Count)
    console.groupEnd()

    console.group("inputs")  
    const inputValue1 = document.getElementById("inputValor1");
    const value1 = parseInt(inputValue1.value);
    console.log(typeof(value1));
    console.log(value1);

    const inputValue2 = document.getElementById("inputValor2");
    const value2 = parseInt(inputValue2.value);
    console.log(typeof(value2));
    console.log(value2);

    const inputValue3 = document.getElementById("inputValor3");
    const value3 = parseInt(inputValue3.value);
    console.log(typeof(value3));
    console.log(value3);

    const inputValue4 = document.getElementById("inputValor4");
    const value4 = parseInt(inputValue4.value);
    console.log(typeof(value4));
    console.log(value4);

    const inputValue5 = document.getElementById("inputValor5");
    const value5 = parseInt(inputValue5.value);
    console.log(typeof(value5));
    console.log(value5);

    const inputValue6 = document.getElementById("inputValor6");
    const value6 = parseInt(inputValue6.value);
    console.log(typeof(value6));
    console.log(value6);
    
    const inputValue7 = document.getElementById("inputValor7");
    const value7 = parseInt(inputValue7.value);
    console.log(typeof(value7));
    console.log(value7);

    const inputValue8 = document.getElementById("inputValor8");
    const value8 = parseInt(inputValue8.value);
    console.log(typeof(value8));
    console.log(value8);

    const inputValue9 = document.getElementById("inputValor9");
    const value9 = parseInt(inputValue9.value);
    console.log(typeof(value9));
    console.log(value9);

    if (value1 || value1 == 0){
        lista1.push(value1);
    }
    if (value2 || value2 == 0){
        lista1.push(value2);
    }
    if (value3 || value3 == 0){
        lista1.push(value3);
    }
    if (value4 || value4 == 0){
        lista1.push(value4);
    }
    if (value5 || value5 == 0){
        lista1.push(value5);
    }
    if (value6 || value6 == 0){
        lista1.push(value6);
    }
    if (value6 || value6 == 0){
        lista1.push(value6);
    }
    if (value7 || value7 == 0){
        lista1.push(value7);
    }
    if (value8 || value8 == 0){
        lista1.push(value8);
    }
    if (value9 || value9 == 0){
        lista1.push(value9);
    }

    console.log(typeof(lista1));
    console.log(lista1);

    lista1.map(
        function(elemento){
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );

    const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    console.group("Convertir lista1Count en Array");
    console.log(typeof(lista1Array));
    console.log(lista1Array)
    console.groupEnd();

    const moda = lista1Array[(lista1Array.length - 1)];
    console.group("Moda");
    console.log(typeof(moda));
    console.log (moda);
    console.log(typeof(moda[0]));
    console.log(moda[0])
    console.log(typeof(moda[1]));
    console.log(moda[1]);
    console.groupEnd();

    const modaValor = parseInt(moda[0]);
    const repeticiones = moda[1]
    console.log("La moda de tus datos es: " + modaValor + " y se repite " + repeticiones + " veces.")

    const printModa = document.getElementById("modaResult")
    printModa.innerText = "La moda de tus datos ingresados es: " + modaValor + ", y esta se repite " + repeticiones + " veces."
}


console.log(mode(NUMBERS));