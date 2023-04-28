function heroRecruitment(params) {
    let spellBook = {};
    let heroName = "";
    let spellName = "";
    while (params[0] !== "End") {
        let line = params.shift().split(' ');
        let command = line[0];
        switch (command) {
            case "Enroll":
                heroName = line[1];
                if (spellBook.hasOwnProperty(heroName)) {
                    console.log(`${heroName} is already enrolled`);
                } else {
                    spellBook[heroName] = [];
                }
                break;

            case "Learn":
                heroName = line[1];
                spellName = line[2];
                if (spellBook.hasOwnProperty(heroName)) {
                    if (spellBook[heroName].includes(spellName)) {
                        console.log(`${heroName} has already learnt ${spellName}`);
                    } else {
                        spellBook[heroName].push(spellName);
                    }
                } else {
                    console.log(`${heroName} does't exist`);
                }
                break;
            case "Unlearn":
                heroName = line[1];
                spellName = line[2];
                if (spellBook.hasOwnProperty(heroName)) {
                    if (spellBook[heroName].includes(spellName)) {
                        let indexOfSpellName = spellBook[heroName].indexOf(spellName);
                        spellBook[heroName].splice(indexOfSpellName, 1);
                    } else {
                        console.log(`${heroName} doesn't know ${spellName}`);
                    }
                } else {
                    console.log(`${heroName} does't exist`);
                }
                break;
        }
    }
    console.log(`Heroes:`);
    for (const hero in spellBook) {
        console.log(`== ${hero}: ${spellBook[hero].join(", ")}`);
    }
}

console.log("-------------");
heroRecruitment([
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End"])
console.log("-------------");
heroRecruitment([
    "Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter dispel",
    "End"])




