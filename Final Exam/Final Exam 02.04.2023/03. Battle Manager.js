function battleManager(params) {
    let records = {};
    let array = [];

    while (params[0] !== "Results") {
        let line = params.shift().split(":");
        let command = line[0];
        switch (command) {
            case "Add":
                let personName = line[1];
                let health = Number(line[2]);
                let energy = Number(line[3]);

                let result = array.find((x) => x.personName === personName);
                let index = array.indexOf(result);

                if (result) {
                    array[index].health += health;
                    if (energy > array[index].energy) {
                        array[index].energy = energy;
                    }
                } else {
                    records = { personName, health, energy };
                    array.push(records);
                }
                break;
            case "Attack":
                let attackerName = line[1];
                let defenderName = line[2];
                let damage = Number(line[3]);
                let attacker = array.find((x) => x.personName === attackerName);
                let indexAttacker = array.indexOf(attacker);
                let defender = array.find((x) => x.personName === defenderName);
                let indexDefender = array.indexOf(defender);
                if (attacker && defender) {
                    array[indexDefender].health -= damage;
                    array[indexAttacker].energy -= 1;
                    let attackerEnergy = array[indexAttacker].energy
                    if (array[indexDefender].health <= 0) {
                        let defender = array.find((x) => x.personName === defenderName);
                        let indexDefender = array.indexOf(defender);
                        array.splice(indexDefender, 1);
                        console.log(`${defenderName} was disqualified!`);
                    }
                    if (attackerEnergy === 0) {
                        let attacker = array.find((x) => x.personName === attackerName);
                        let indexAttacker = array.indexOf(attacker);
                        array.splice(indexAttacker, 1);
                        console.log(`${attackerName} was disqualified!`);
                    }
                }
                break;
            case "Delete":
                let username = line[1];
                if (username === "All") {
                    records = {};
                    array = [];
                }
                let findDelete = array.find((x) => x.personName === username);
                let indexDelete = array.indexOf(findDelete);
                array.splice(indexDelete, 1);
        }
    }
    console.log(`People count: ${array.length}`);
    array.forEach(r => console.log(`${r.personName} - ${r.health} - ${r.energy}`));
}
battleManager([
    "Add:Bonnie:3000:5",
    "Add:Kent:10000:10",
    "Add:Johny:4000:10",
    "Attack:Johny:Bonnie:400",
    "Add:Johny:3000:5",
    "Add:Peter:7000:1",
    "Delete:Kent",
    "Results"])



    // Input
    // •	The possible commands are:
    // o	"Results"
    // o	"Add:{personName}:{health}:{energy}"
    // o	"Attack:{attackerName}:{defenderName}:{damage}"
    // o	"Delete:{username}"
    // o	"All"
    // Output
    // •	The possible outputs are:
    // o	"{name} was disqualified!"
    // o	"People count: {count}"
    // {firstPersonName} - {health} - {energy}
    // {secondPersonName} - {health} - {energy}
    // …
    // {NPersonName} - {health} - {energy}"
