function sorting(input) {
    let sortedArray = input.sort((a, b) => a - b);
    let resultArray = [];

    for (let i = 0; i < sortedArray.length; i++) {
        let lastElement = sortedArray.pop();
        let firstArray = sortedArray.shift();

        resultArray.push(lastElement);
        resultArray.push(firstArray);
    }
    resultArray.push(sortedArray.pop());
    resultArray.push(sortedArray.shift());

    console.log(resultArray.join(' '));
}
sorting([1, 2, 3, 4]);