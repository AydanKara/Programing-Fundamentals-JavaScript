function distinctArray(input) {
    let arr = [];
    for (let el of input) {
        if (!arr.includes(el)) {
            arr.push(el);
        }
    }
    console.log(arr.join(' '));
}
distinctArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);