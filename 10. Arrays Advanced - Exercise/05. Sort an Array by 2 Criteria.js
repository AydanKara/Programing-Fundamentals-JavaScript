function sortArray(input) {
    let sortedArray = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    sortedArray.forEach(element => {
        console.log(element)
    });
}
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);