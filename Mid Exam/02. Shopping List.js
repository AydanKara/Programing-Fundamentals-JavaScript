function shoppingList(input) {
    // list with groceries
    let groceriesList = input.shift().split('!');

    // commands until 'Go Shopping'
    let index = 0;
    while (input[index] !== 'Go Shopping!') {
        let [command, token1, token2] = input[index].split(' ');

        if (command === 'Urgent') {
            if (!(groceriesList.includes(token1))) {
                groceriesList.unshift(token1);
            }
        } else if (command === 'Unnecessary') {
            if (groceriesList.includes(token1)) {
                groceriesList.splice(groceriesList.indexOf(token1), 1);
            }
        } else if (command === 'Correct') {
            if (groceriesList.includes(token1)) {
                let tokenIndex = groceriesList.indexOf(token1);
                groceriesList[tokenIndex] = token2;
            }
        } else if (command === 'Rearrange') {
            if (groceriesList.includes(token1)) {
                let tokenIndex = groceriesList.indexOf(token1);
                groceriesList.splice(tokenIndex, 1);
                groceriesList.push(token1);
            }
        }
        index++;
    }
    console.log(groceriesList.join(', '));
}
shoppingList([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])