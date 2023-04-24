function companyUsers(input) {
    let result = {};
    input.forEach(line => {
        let [companyName, personId] = line.split(' -> ');

        if (!result.hasOwnProperty(companyName)) {
            result[companyName] = [];
        }
        result[companyName].push(personId);
    });
    let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

    sorted.forEach(el => {
        const companyName = el[0];
        const personId = el[1];
        console.log(companyName);
        let uniqueIDs = new Set(personId);
        for (const id of uniqueIDs) {
            console.log(`-- ${id}`);
        }
    });
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])