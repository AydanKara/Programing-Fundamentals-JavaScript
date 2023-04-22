function houseParty(input) {
    let guestsArr = [];

    for (const el of input) {
        let command = el.split(' ');
        let name = command[0];

        if (command.length === 3) {
            if (guestsArr.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestsArr.push(name);
            }
        } else {
            if (!guestsArr.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = guestsArr.indexOf(name);
                guestsArr.splice(index, 1);
            }
        }
    }
    console.log(guestsArr.join('\n'));
}
houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);