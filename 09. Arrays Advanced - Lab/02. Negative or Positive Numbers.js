function negativePositiveNumbers(arr) {
    let result = [];
    for (let num of arr) {
        let positiveNegative = (num < 0) ? result.unshift(num) : result.push(num);
    }
    console.log(result.join("\n"));
}
negativePositiveNumbers(['7', '-2', '8', '9'])