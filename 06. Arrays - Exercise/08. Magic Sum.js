function magicSum(arr, sum) {

    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        for (let j = i + 1; j < arrLength; j++) {
            if (arr[i] + arr[j] == sum) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8);