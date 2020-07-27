function arraySum(arr) {
    let highValue = [];
    let array = arr.sort((a, b) => b - a);
    highValue.push(array[0]);
    console.log(array.reduce((a, b) => a + b) - highValue);
    if (array.reduce((a, b) => a + b) - highValue !== highValue[0]) {
        return false;
    }
    return true;
}

console.log(arraySum([1, 2, 4, 6, 13]));
console.log(arraySum([1, 2, 4, 54, 22]));

