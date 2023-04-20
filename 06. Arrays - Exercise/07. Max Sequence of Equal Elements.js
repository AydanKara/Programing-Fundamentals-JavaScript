function maxSequenceOfEqualElements(arr) {
    let arrLength = arr.length;
    let bestCounter = 0;
    let counter = 1;
    let arrMax = [];
    let element = ``;
    for (let i = 0; i < arrLength - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            counter++;
            if (counter > bestCounter) {
                bestCounter = counter;
                element = arr[i];
            }
        } else {
            counter = 1;
        }
    }
    for (let max = 0; max < bestCounter; max++) {
        arrMax.push(element);
    }
    console.log(arrMax.join(` `));
}

function maxSequenceOfEqualElements2(arr) {
    let arrLength = arr.length;
    let maxSequence = [];
    for (let i = 0; i < arrLength; i++) {
        let currentSequence = [];
        for (let j = i; j < arrLength; j++) {
            if (arr[i] === arr[j]) {
                currentSequence.push(arr[i]);
            } else {
                break;
            }
        }
        if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
        }
    }
    console.log(maxSequence.join(` `));
}

maxSequenceOfEqualElements2([0, 1, 1, 5, 2, 2, 6, 3, 3]);
console.log("-----------");
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);