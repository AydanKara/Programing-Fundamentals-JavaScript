function degustationParty(params) {

    let persons = {};
    let unlike = 0;

    while (params[0] !== "Stop") {
        let line = params.shift().split("-");
        let command = line[0];
        let guest = line[1];
        let meal = line[2];
        switch (command) {
            case "Like":
                if (!persons.hasOwnProperty(guest)) {
                    persons[guest] = [];
                    persons[guest].push(meal);
                    break;
                }
                if (persons[guest].includes(meal)) {
                    break;
                }
                persons[guest].push(meal);
                break;
            case "Dislike":
                unlike++;
                if (!persons.hasOwnProperty(guest)) {
                    console.log(`${guest} is not at the party.`);
                }
                if (!persons[guest].includes(meal)) { 
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                    break;
                }
                let index = persons[guest].indexOf(meal);
                persons[guest].splice(index, 1);
                console.log(`${guest} doesn't like the ${meal}.`);
                break;
        }
    }
    console.table(persons);

    // object loop
    for (const person in persons) {
        console.log(`${person}: ${persons[person].join(', ')}`);
    }
    console.log(`Unliked meals: ${unlike}`);
    
}
degustationParty(["Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Krisi-kebap",
    "Like-Penelope-dessert",
    "Like-Penelope-rise",
    "Like-Misho-salad",
    "Stop"])




