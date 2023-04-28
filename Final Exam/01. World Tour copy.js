function worldTour(input) {

    let currState = input.shift();
    input.forEach(line => {
        if (line === `Travel`) {
            return console.log(`Ready for world tour! Planned stops: ${currState}`);
        }

        let [command, ...commandInfo] = line.split(`:`);

        switch (command) {

            case `Add Stop`:
                let [index, string] = commandInfo;
                index = Number(index);

                if (currState[index] !== undefined) {
                    let firstPart = currState.substring(0, index);
                    let secondPart = currState.substring(index);
                    currState = firstPart + string + secondPart;
                }
                console.log(currState);
                break;

            case `Remove Stop`:
                let startIndex = Number(commandInfo[0]);
                let endIndex = Number(commandInfo[1]);

                if (currState[startIndex] !== undefined && currState[endIndex] !== undefined) {
                    let substr = currState.substring(startIndex, endIndex + 1);
                    currState = currState.replace(substr, "");
                }
                console.log(currState);
                break;

            case `Switch`:
                let [oldStr, newStr] = commandInfo;

                if (currState.includes(oldStr)) {
                    currState = currState.replace(oldStr, newStr);
                }
                console.log(currState);
                break;
        }
    });

}
worldTour(
    ["Hawai::Cyprys-Greece",
        "Add Stop:7:Rome",
        "Remove Stop:11:16",
        "Switch:Hawai:Bulgaria",
        "Travel"
    ]);