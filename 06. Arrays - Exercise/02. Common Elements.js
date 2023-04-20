function commonElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let firstWord = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            let secondWord = arr2[j];
            if (firstWord === secondWord) {
                console.log(firstWord);
            }
        }
    }
}

function commonElements2(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let currentWord = arr1[i];
        if (arr2.includes(currentWord)) {
            console.log(currentWord);
        }
    }
}

function commonElements3(arr1, arr2) {
    for (let element of arr1) {
        if (arr2.includes(element)) {
            console.log(element);
        }
    }
}
commonElements3(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);