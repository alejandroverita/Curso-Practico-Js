const calcularMediaAritmetica = (lista) =>
   /*  let sumaLista = 0;

    for (let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i]
    } */

    // reduce recibe una funcion que permitira ir sumando cada elemento
    lista.reduce((valorAcumulado = 0, nuevoElemento)=>valorAcumulado + nuevoElemento)/lista.length;

