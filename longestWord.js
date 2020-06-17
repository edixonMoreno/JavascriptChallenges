document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
        if(e.keyCode == 13) {
          e.preventDefault();
          document.getElementById("enviar").click();          
        }
      }))
    });

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
document.getElementById('resultado').innerHTML = "La palabra más larga de tu redacción es: " + "<strong>" + longestWord(str) + "</strong>";

}


