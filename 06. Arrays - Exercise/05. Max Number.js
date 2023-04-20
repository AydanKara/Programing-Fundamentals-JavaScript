function maxNumber2(arr) {
    let arrMax = [];
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let isLargest = true;
        for (let j = i + 1; j < arrLength; j++) {
            if (arr[i] <= arr[j]) {
                isLargest = false;
                break;
            }
        }
        if (isLargest) {
            arrMax.push(arr[i]);
        }
    }
    console.log(arrMax.join(` `));
}
maxNumber2([1, 4, 3, 2]);

function maxNumber(arr) {
    let maxArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isLargest = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isLargest = false;
                break;
            }
        }
        if (isLargest) {
            maxArr.push(arr[i]);
        }
    }
    console.log(maxArr.join(" "));
}
maxNumber([1, 4, 3, 2]);