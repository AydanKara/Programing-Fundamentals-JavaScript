function stringGame(params) {
    let string = params.shift();
    let line = params.shift();

    while (line !== "Done") {
        line = line.split(" ");
        let command = line[0];
        switch (command) {
            case "Change":
                let charChange = line[1];
                let replacement = line[2];
                if (string.includes(charChange)) {
                    while (string.includes(charChange)) {
                        string = string.replace(charChange, replacement);
                    }
                    console.log(string);
                }
                break;
            case "Includes":
                let substringIncludes = line[1];
                if (string.includes(substringIncludes)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "End":
                let substringEnd = line[1];
                let endsWith = string.endsWith(substringEnd);
                if (endsWith) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "Uppercase":
                let uppercase = string.toUpperCase();
                string = uppercase;
                console.log(uppercase);
                break;
            case "FindIndex":
                let char = line[1];
                let findIndex = string.indexOf(char);
                console.log(findIndex);
                break;
            case "Cut":
                let startIndex = line[1];
                let count = line[2];
                let cutString = string.substr(startIndex, count);
                console.log(cutString);
                break;
        }
        line = params.shift();
    }
}
stringGame([
    "//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"
])
