function convertToObject(json) {
    // method to convert json string to object
    let person = JSON.parse(json);
    // method to get object's properties
    let entries = Object.entries(person);
    entries.forEach(el => {
        console.log(el);
    })
    // loop through object's entries and print them
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}
convertToObject(
'{"name": "George", "age": 40, "town": "Sofia"}'
    )