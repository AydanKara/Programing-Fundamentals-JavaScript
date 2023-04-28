function worldTour(params) {
    let allStops = params.shift();
    let temp = [];
    let currLine = params.shift();
    while (currLine !== "Travel") {
        let tokens = currLine.split(":");
        let command = tokens[0];
        switch (command) {
            case "Add Stop":
                let index = Number(tokens[1]);
                let string = tokens[2];
                if (allStops[index] !== undefined) {
                    temp = allStops.split("");
                    temp.splice(index, 0, string);
                    allStops = temp.join("");
                }
                console.log(allStops);
                break;
            case "Remove Stop":
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                temp = allStops.split("");
                if (temp[startIndex] !== undefined && temp[endIndex] !== undefined) {
                    temp.splice(startIndex, (endIndex - startIndex) + 1);
                    allStops = temp.join("");
                }
                console.log(allStops);
                break;
            case "Switch":
                let oldString = tokens[1];
                let newString = tokens[2];
                if (allStops.includes(oldString)) {
                    allStops = allStops.replace(oldString, newString);
                }
                console.log(allStops);
                break;
        }
        currLine = params.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${allStops}`);
}
worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
    ])


