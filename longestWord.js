// const str = document.querySelector('.redacción');
// const resultado = document.querySelector('.resultado');

/* const str = 'La noche más oscura trae mucha luz cuando acaba';


    
        longestWord = (srt) => {
        const strArray = str.split(' ');
        const sortedStrArray = strArray.sort((strA, strB) => {
        return strB.length - strA.length;
        }
);
    return sortedStrArray[0]; 
}


console.log(longestWord(str)); */

// console.log(longestWord(str));

/* resultado.textContent = 'La palabra más larga de tu redacción es: ';

console.log(longestWord(str));

console.log(str.split(' '));
console.log(str.split(' ').length);

let división = (a,b) => a/b;

console.log(división(6,2)); */


function analizar() {

    
    const boton = document.getElementById('enviar');
    var str = document.getElementById('redaccionUsuario').value;
        
        longestWord = (srt) => {
        const strArray = str.split(' ');
        const sortedStrArray = strArray.sort((strA, strB) => {
        return strB.length - strA.length;
        event.preventdefault(); 
        }
    );
        return sortedStrArray[0]; 
        
    } 
document.getElementById('resultado').innerHTML = "La palabra más larga de tu redacción es: " + longestWord(str);


console.log(longestWord(str));
}