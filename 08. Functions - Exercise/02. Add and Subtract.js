function addAndSubtract(numOne, numTwo, numThree) {
    let add = sum(numOne, numTwo);
    let sub = subtract(add, numThree);
    return sub;

    function sum(numOne, numTwo) {
        return numOne + numTwo;
    }
    function subtract(numOne, numTwo) {
        return numOne - numTwo;
    }
}

console.log(addAndSubtract(23, 6, 10)); 