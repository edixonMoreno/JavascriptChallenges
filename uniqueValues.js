/*
function UniqueString(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== i) {

            return false;
        }

    }
    return true;
}

console.log(UniqueString("12345"));
console.log(UniqueString("abcdeeffde"));
*/
/*
function UniqueArray(str) {
    let values = [];
    for (let letra of str) {

        if (values.lastIndexOf(letra) !== -1) {

            return false;
        }
        values.push(letra);

    }
    return true;
}

console.log(UniqueArray("12345"));
console.log(UniqueArray("abcedeafde"));
*/


/*function UniqueObject(str) {
    let values = {};
    for (let letra of str) {
        letra = letra.toUpperCase();
        if (values[letra]) {

            return false;
        }
        values[letra] = "exist";
    }
    return true;

}*/

function UniqueSet(str) {

    // return new Set(str).size === str.length;

    // let array = str.split("");
    let Unique = [...new Set(str)];
    return Unique.length === str.length;

}

console.log(UniqueSet("abcd"));
console.log(UniqueSet("abcdeade"));

