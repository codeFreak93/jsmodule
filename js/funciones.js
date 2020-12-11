function getName(){
    //sentencias
    const name = prompt('Cual es tu nombte?');
    console.log(name)
}

function nameReverse(name){
    console.log(name)
    
}


//imprimir la tabla al revez
function imprimeTabla(numero){
    for(let i=10; i>0; i--){
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}

imprimeTabla(10);


/** 
 * ejercicio 
    1. Asignar un string a una variable 
    2. Verificar cuantos caracteres tiene ese string
    3. Imprimirlo en consola
*/

function contarCaracteres(palabra){
    console.log(`la palabra "${palabra}" tiene  ${palabra.length} caracteres`);
}
contarCaracteres('palabra');

/**
 * Ejercicio
 * Declarar 2 variables con strings y concatenarlos
 */

 function conCatenar(string1, string2){
    console.log(string1.concat(' ',string2));
 }

 conCatenar('Juan', 'Hernández');


 /**
 * Ejercicio 
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string con cada una de las palabras Capitalizadas
 * "hola koders"
 * "Hola Koders"
 */


function capitalizeString(stringVal){
    const ARREGLO = stringVal.split(' ');
    let arregloCapitalizado= [];
    ARREGLO.forEach(palabra => {
        arregloCapitalizado.push(palabra.charAt(0).toUpperCase() + palabra.slice(1))
    });

    console.log(arregloCapitalizado.join(' '))
}


capitalizeString('juan de dios');

/*imprimir en consola los múltiplos de x y y  que se encuentran entre el rango a y b
*/

function printMultiplos(x, y, rangoA, rangoB){
    for(let i=rangoA; i<=rangoB; i++){
        if(i%x===0  || i%y===0){
            console.log(i);
        }
    }   
}

printMultiplos(2,7, 50, 80);


/*imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
“en un lugar de la mancha” -> 5*/

function countWhiteSpaces(texto){
    const arregloMatches = texto.match(/ /g);
    console.log(`${texto} -> ${arregloMatches.length}`);
}

countWhiteSpaces('ANITA LAVA LA TINA');

/*imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
“Hola mundo” -> 4*/

function contarVocales(texto){
    const vocales = 'aeiouAEIOU';
    let cantidadVocales =0;
    for(i=0; i<=texto.length; i++){
        if(vocales.includes(texto[i])){
            cantidadVocales++
        }
    }

    console.log(cantidadVocales);
}

contarVocales('HOLA MUNDO');


function saludar(nombre='Sin nombre'){
    console.log(`hola ${nombre}`);
}

saludar();

function sumar(a, b){
    return a +b;
}

console.log(sumar(1 ,2) + sumar(1,4))