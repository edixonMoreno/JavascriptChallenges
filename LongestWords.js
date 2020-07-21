/* Función para identificar la o las palabras más largas 
de una oración */

function longestWordS(string) {
    let palabras = string.split(" ");
    let tamaño = 0;
    let palabrasLargas = [""];


    for (i = 0; i < palabras.length; i++) {
        if (palabras[i].length >= tamaño) {
            tamaño = palabras[i].length;
            if (palabrasLargas[palabrasLargas.length - 1].length < tamaño) {
                palabrasLargas = [];
                palabrasLargas.push(palabras[i]);
            }
            else {
                palabrasLargas = [...palabrasLargas, palabras[i]];
            }
        }
    }


    return [...palabrasLargas];

}

console.log(longestWordS("Prueba de la redacción más larga redactada"));
console.log(longestWordS("this is a test to improve myself in the fieldie "));

/* Función para capitalizar la primera letra 
de una oración */

function Capitalized(str) {

    const reg = new RegExp(/^[¡!¿? ]{0,}[a-zàáèéìíòóùú]/);

    let string = str.replace(/\b[a-z]/g, n => n.toUpperCase())

    let r = reg.exec(string);

    console.log(r)

    return string;

}



console.log(Capitalized("en la esquina estamos esperando"));
console.log(Capitalized("Todo pasa y nada se mantiene estático"));


