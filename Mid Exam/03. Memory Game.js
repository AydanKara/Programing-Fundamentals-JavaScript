function memoryGame(input) {
    let elements = input.shift().split(' ');
    let moves = 0;

    let i = 0;
    while (input[i] !== 'end') {
        moves++;
        let [index1, index2] = input[i].split(' ');
        index1 = Number(index1);
        index2 = Number(index2);
        if (index1 == index2 || elements[index1] == undefined || elements[index2] == undefined) {
            let middleElementsLength = elements.length / 2;
            elements.splice(middleElementsLength, 0, `-${moves}a`, `-${moves}a`);
            console.log('Invalid input! Adding additional elements to the board');
        } else if (elements[index1] == elements[index2]) {
            let element = elements[index1];
            if (index1 > index2) {
                elements.splice(index1, 1);
                elements.splice(index2, 1);
            } else {
                elements.splice(index2, 1);
                elements.splice(index1, 1);
            }
            console.log(`Congrats! You have found matching elements - ${element}!`);
        } else {
            console.log('Try again!');
        }
        if (elements.length == 0) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }
        i++;
    }
    console.log(`Sorry you lose :(`);
    console.log(`${elements.join(' ')}`);
}
memoryGame([

    "a 2 4 a 2 4",

    "0 3",

    "0 2",

    "0 1",

    "0 1",

    "end"

])