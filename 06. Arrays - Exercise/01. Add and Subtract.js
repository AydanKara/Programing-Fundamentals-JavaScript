function addAndSubtract(arr) {
    let oldSum = 0;
    let newSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currNumber = arr[i];
        oldSum += currNumber;
        if (currNumber % 2 == 0) {
            currNumber += i;
            arr[i] = currNumber;
            newSum += currNumber;
        } else {
            currNumber -= i;
            arr[i] = currNumber;
            newSum += currNumber;
        }
    }
    console.log(arr);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35])