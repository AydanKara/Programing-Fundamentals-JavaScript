function processOddNumbers(arr) {
    let newArr = arr
        .filter((num, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse();
    return newArr.join(" ");
}
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));