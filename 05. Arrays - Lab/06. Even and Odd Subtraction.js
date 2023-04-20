function evenOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let num of arr) {
        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    console.log(evenSum - oddSum);
}
evenOddSubtraction([2,4,6,8,10])