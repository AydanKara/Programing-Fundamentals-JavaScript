function manOWar(input) {
    let pirateShip = input.shift().split('>').map(x => Number(x));
    let warShip = input.shift().split('>').map(x => Number(x));
    let maxHealth = Number(input.shift());
    let index = 0;

    while (input[index] !== 'Retire') {
        let [command, token1, token2, token3] = input[index].split(' ');
        token1 = Number(token1);
        token2 = Number(token2);
        token3 = Number(token3);

        if (command === 'Fire') {
            if (warShip[token1]) {
                warShip[token1] -= token2;
                if (warShip[token1] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        } else if (command === 'Defend') {
            if (pirateShip[token1] && pirateShip[token2]) {
                for (let i = token1; i <= token2; i++) {
                    pirateShip[i] -= token3;
                    if (pirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        } else if (command === 'Repair') {
            if (pirateShip[token1]) {
                pirateShip[token1] += token2;
                if (pirateShip[token1] > maxHealth) {
                    pirateShip[token1] = maxHealth;
                }
            }
        } else if (command === 'Status') {
            let counter = 0;
            for (let i = 0; i < pirateShip.length; i++) {
                if (pirateShip[i] < maxHealth * 0.2) {
                    counter++;
                }
            }
            console.log(`${counter} sections need repair.`);
        }
        index++;
    }
    let warShipSum = 0;
    warShip.forEach(element => {
        warShipSum += element;
    });

    let pirateShipSum = 0;
    pirateShip.forEach(element => {
        pirateShipSum += element;
    });
    
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
}
manOWar([
        "12>13>11>20>66",
        "12>22>33>44>55>32>18",
        "70",
        "Fire 2 11",
        "Fire 8 100",
        "Defend 3 6 11",
        "Defend 0 3 5",
        "Repair 1 33",
        "Status",
        "Retire"])