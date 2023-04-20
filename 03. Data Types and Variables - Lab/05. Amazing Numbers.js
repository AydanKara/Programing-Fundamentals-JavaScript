function amazingNumber(number) {
    numToString = number.toString();
    let sum = 0;
    for (let i = 0; i < numToString.length; i++) {
        sum += Number(number[i]);
    }
    let result = sum.toString().includes(`9`);
    console.log(result ? `${number} Amazing? True` :
        `${number} Amazing? False`);
}
amazingNumber(52345)