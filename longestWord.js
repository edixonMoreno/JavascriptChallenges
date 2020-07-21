const str = ('La noche mas oscura es la que mas enseña');

const longestWord = (srt) => {
        const strArray = str.split(' ');
        const sortedStrArray = strArray.sort((strA, strB) => {
        return strB.length - strA.length;
        }
);
    return sortedStrArray[0];
}

console.log(longestWord(str));