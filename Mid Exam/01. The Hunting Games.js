function huntingGame(input) {
    let days = Number(input.shift());
    let players = Number(input.shift());
    let groupsEnergy = Number(input.shift());
    let waterPerDayPerPerson = Number(input.shift());
    let foodPerDayPerPerson = Number(input.shift());
    let totalWater = days * players * waterPerDayPerPerson;
    let totalFood = days * players * foodPerDayPerPerson;

    for (let i = 1; i <= days; i++) {
        groupsEnergy -= Number(input[i - 1]);

        if (groupsEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }
        if (i % 2 === 0) {
            groupsEnergy *= 1.05;
            totalWater *= 0.7;
        }
        if (i % 3 === 0) {
            totalFood -= totalFood / players;
            groupsEnergy *= 1.1;
        }
    }
    if (groupsEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(2)} energy!`);
    }
}
huntingGame([
    "10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"]) 