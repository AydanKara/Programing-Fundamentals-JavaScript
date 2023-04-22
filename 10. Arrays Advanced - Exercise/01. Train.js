function train(input) {
    let passengers = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());
    let inputLength = input.length;

    for (let index = 0; index < inputLength; index++) {
        let currentCommand = input[index].split(' ');

        if (currentCommand[0] === 'Add') {
            let newPassenger = Number(currentCommand[1]);
            passengers.push(newPassenger);
        } else {
            for (let i = 0; i < passengers.length; i++) {
                let passengersInCurrentWagon = passengers[i];
                if (passengersInCurrentWagon + Number(currentCommand[0]) <= maxCapacity) {
                    passengers[i] += Number(currentCommand[0]);
                    break;
                }
            }
        }
    }
    console.log(passengers.join(' '));
}
train([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])