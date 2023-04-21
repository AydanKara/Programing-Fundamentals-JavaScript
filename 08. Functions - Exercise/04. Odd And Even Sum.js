function oddAndEvenSum(number) {
    
    let numberAsString = number.toString();
    let evenSum = 0;
    let oddSum = 0;
    let numAsStrLength = numberAsString.length;

    for (let i = 0; i < numAsStrLength; i++) {
        let singleNumber = Number(numberAsString[i]);
        if (singleNumber % 2 === 0) {
            evenSum += singleNumber;
        } else {
            oddSum += singleNumber;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234)