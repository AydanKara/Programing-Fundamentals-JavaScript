function thePianist(params) {
    let piecesNumber = Number(params.shift());
    let collection = {};
    let array = [];
    let piece = "";
    let composer = "";
    let key = "";
    let isExist = false;
    let index = 0;

    for (let i = 0; i < piecesNumber; i++) {
        let command = params.shift().split("|");
        // {piece}|{composer}|{key}
        piece = command[0];
        composer = command[1];
        key = command[2];

        isExist = array.find((x) => x.piece === piece);
        index = array.indexOf(isExist);

        if (isExist) {
            array[index].composer = composer;
            array[index].key = key;
        } else {
            collection = { piece, composer, key };
            array.push(collection);
        }
    }

    let command = params.shift();
    while (command !== 'Stop') {
        let commands = command.split("|");
        let currentCommand = commands.shift();
        switch (currentCommand) {

            // Add|{piece}|{composer}|{key}
            case "Add":
                piece = commands[0];
                composer = commands[1];
                key = commands[2];
                isExist = array.find((x) => x.piece === piece);

                if (isExist) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    collection = { piece, composer, key };
                    array.push(collection);
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }
                break;

            // Remove|{piece}
            case "Remove":
                piece = commands[0];
                isExist = array.find((x) => x.piece === piece);
                index = array.indexOf(isExist);
                if (isExist) {
                    array.splice(index, 1);
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;

            // ChangeKey|{piece}|{new key}
            case "ChangeKey":
                piece = commands[0];
                let newKey = commands[1];
                isExist = array.find((x) => x.piece === piece);
                if (isExist) {
                    index = array.indexOf(isExist);
                    array[index].key = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }
        command = params.shift();
    }
    array.forEach(p => console.log(`${p.piece} -> Composer: ${p.composer}, Key: ${p.key}`));
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])
