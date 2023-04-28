function plantDiscovery(params) {
    // input parameters
    const plantCount = Number(params.shift());
    let plants = {};

    // collect initial plants
    for (let i = 0; i < plantCount; i++) {
        // collect plant data
        let line = params.shift();
        let lineArr = line.split('<->');
        let name = lineArr[0];
        let rarity = Number(lineArr[1]);

        // store plant data
        plants[name] = {
            rarity: rarity,
            ratings: [],
        }
    }

    // loop commands
    let line = params.shift();
    while (line !== "Exhibition") {
        // extract plant data
        let commandArr = line.split(': ');
        let command = commandArr[0];
        let arguments = commandArr[1].split(' - ');
        let name = arguments[0];
        let value = arguments[1];
        let plant = plants[name];
        if (plant) {
            switch (command) {
                case "Rate":
                    let rating = Number(value);
                    plant.ratings.push(rating);
                    break;
                case "Update":
                    let rarity = Number(value);
                    plant.rarity = rarity;
                    break;
                case "Reset":
                    plant.ratings = [];
                    break;
            }
        } else {
            console.log("error");
        }
        line = params.shift();
    }

    // print result
    console.log(`Plants for the exhibition:`);
    for (const plantName in plants) {
        let sum = 0;
        for (const rating of plants[plantName].ratings) {
            sum += rating;
        }
        let ratingsCount = plants[plantName].ratings.length;
        let averageRating = sum / ratingsCount;
        if (!averageRating) {
            averageRating = 0;
        }
        console.log(`- ${plantName}; Rarity: ${plants[plantName].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
}
plantDiscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])