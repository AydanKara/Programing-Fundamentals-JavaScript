function destinationMapper(params) {
    let regExPattern = /(={1}|\/{1})(?<name>[A-Z][A-z]{2,})\1/gm;
    let matchesDestinations = regExPattern.exec(params);
    let travelPoints = 0;
    let destination = [];

    if (matchesDestinations == null) {
        console.log(`Destinations:`);
        console.log(`Travel Points: 0`);
        return;
    }

    while (matchesDestinations) {
        let city = matchesDestinations.groups["name"];
        destination.push(city);
        for (let i = 0; i < city.length; i++) {
            travelPoints++;
        }
        matchesDestinations = regExPattern.exec(params);
    }
    console.log(`Destinations: ${destination.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")