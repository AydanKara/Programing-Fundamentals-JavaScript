function theLift(input) {
    let waitingPeople = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);
    for (let i = 0; i < wagons.length; i++) {
        if (waitingPeople <= 0) {
            console.log('The lift has empty spots!');
            console.log(wagons.join(' '));
            return;
        } else if (wagons[i] < 4) {
            let liftedPeople = 4 - wagons[i];
            if (waitingPeople >= liftedPeople) {
                wagons[i] += liftedPeople;
            } else {
                wagons[i] += waitingPeople;
            }
            waitingPeople -= liftedPeople;
        } else if (wagons[i] === 4) {
            continue;
        }
    }
    if (waitingPeople > 0) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
        console.log(wagons.join(' '));
    } else if (wagons[wagons.length - 1] === 4 && waitingPeople === 0) {
        console.log(wagons.join(' '));
    } else {
        console.log('The lift has empty spots!');
        console.log(wagons.join(' '));
    }
}
theLift([
    "20",
    "0 2 0"
]);