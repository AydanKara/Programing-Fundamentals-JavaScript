function specialNumber(number) {

    for (let i = 1; i <= number; i++) {
        let sum = 0;
        let curNumber = i;
        while (curNumber > 0) {
            let curDigit = curNumber % 10;
            sum += curDigit;
            curNumber = curNumber / 10;
            curNumber = parseInt(curNumber);
        }

        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
specialNumber(15);