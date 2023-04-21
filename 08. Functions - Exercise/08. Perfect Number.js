function perfectNumber(number) {

    let sumOfDivisors = 0;

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sumOfDivisors += i;
        }
    }
    
    /* if (sumOfDivisors === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }*/

    let result = (sumOfDivisors === number) ? "We have a perfect number!" : "It's not so perfect.";

    console.log(result);
}
perfectNumber(1236498);