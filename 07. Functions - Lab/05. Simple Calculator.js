function simpleCalculator(numOne, numTwo, operator) {
    let result;
    switch (operator) {
        case 'multiply': result = numOne * numTwo; break;
        case 'divide': result = numOne / numTwo; break;
        case 'add': result = numOne + numTwo; break;
        case 'subtract': result = numOne - numTwo; break;
    }
    console.log(result);
}
simpleCalculator(5, 5, 'multiply');

function simpleCalculator2(numOne, numTwo, operator) {
    switch (operator) {
        case 'multiply': multiply(numOne, numTwo); break;
        case 'divide': divide(numOne, numTwo); break;
        case 'add': add(numOne, numTwo); break;
        case 'subtract': subtract(numOne, numTwo); break;
    }
    function multiply(numOne, numTwo) {
        return numOne * numTwo;
    }
    function divide(numOne, numTwo) {
        return numOne / numTwo;
    }
    function add(numOne, numTwo) {
        return numOne + numTwo;
    }
    function subtract(numOne, numTwo) {
        return numOne - numTwo;
    }
}
simpleCalculator2(5, 5, 'multiply');