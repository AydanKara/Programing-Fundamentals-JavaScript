function degustationParty(params) {

    let persons = {};
    let unlike = 0;

    while (params[0] !== "Stop") {
        let line = params.shift().split("-");
        let command = line[0];
        let guest = line[1];
        let meal = line[2];
        if (persons.hasOwnProperty(guest)) {
            switch (command) {
                case "Like":
                    if (persons[guest].includes(meal)) {
                        break;
                    } else {
                        persons[guest].push(meal);
                    }
                    break;

                case "Dislike":
                    if (!persons[guest][meal] == meal) {
                        let index = persons[guest][meal].indexOf(meal);
                        array.persons[guest][meal].splice(index, 1);
                        unlike++;
                    } else {
                        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                    }
                    break;
            }
        } else if (command === "Dislike") {
            console.log(`${guest} is not at the party.`);
        } else {
            persons[guest] = [meal];
        }
    }
    for (const person in persons) {
        console.log(`${person}: ${persons[person].join(", ")}`);
    }
    console.log(`Unliked meals: ${unlike}`);
    console.table(persons);
    
}
degustationParty(["Like-Krisi-shrimps",
"Like-Krisi-soup",
"Like-Krisi-kebap",
"Like-Penelope-dessert",
"Like-Penelope-rise",
"Like-Misho-salad",
"Stop"])





