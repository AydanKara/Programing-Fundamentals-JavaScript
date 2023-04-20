function arrayRotation(arr, n) {
    let buffArr = [];
    for (let i = 0; i < n; i++) {
        let currentElement = arr[0];
        for (let j = 1; j < arr.length; j++) {
            buffArr.push(arr[j]);
        }
        buffArr.push(currentElement);
        arr = buffArr;
        buffArr = [];
    }
    console.log(arr.join(" "));
}

function arrayRotation2(arr, n) {
    for (let i = 0; i < n; i++) {
        arr.push(arr.shift());
    }
    console.log(arr.join(" "));
}

arrayRotation2([51, 47, 32, 61, 21], 2)