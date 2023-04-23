function dictionary(input) {
    let dictionaryObject = {};

    for (let i = 0; i < input.length; i++) {
        let obj = JSON.parse(input[i]);
        dictionaryObject = Object.assign(dictionaryObject, obj);
    }
    let sortedObj = Object.keys(dictionaryObject).sort((a, b) => a.localeCompare(b));

    for (let key in sortedObj) {
        console.log(`Term: ${sortedObj[key]} => Definition: ${dictionaryObject[sortedObj[key]]}`);
    }
}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])


