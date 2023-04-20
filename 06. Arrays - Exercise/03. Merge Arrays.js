function mergeArray(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        let value1 = arr1[i];
        let value2 = arr2[i];
        if (i % 2 == 0) {
            value1 = Number(value1);
            value2 = Number(value2);
        }
        let currentResult = value1 + value2;
        result[i] = currentResult;
    }
    console.log(result.join(" - "));
}
mergeArray(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);