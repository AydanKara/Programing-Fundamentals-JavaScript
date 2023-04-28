function decryptingCommands(params) {
    let string = params.shift();
    let command = params.shift();
    let startIndex = 0;
    let endIndex = 0;

    while (command !== "Finish") {
        let tokens = command.split(" ");
        let decryptingCommand = tokens[0];
        switch (decryptingCommand) {
            case "Replace":
                let currentChar = tokens[1];
                let newChar = tokens[2];
                if (string.includes(currentChar)) {
                    while (string.includes(currentChar)) {
                        string = string.replace(currentChar, newChar);
                    }
                    console.log(string);
                }
                break;
            case "Cut":
                startIndex = Number(tokens[1]);
                endIndex = Number(tokens[2]);
                if (startIndex >= 0 && startIndex < string.length - 1 &&
                    endIndex > startIndex && endIndex < string.length) {
                    let cutString = string.substr(startIndex, endIndex);
                    string = string.replace(cutString, "");
                    console.log(string);
                } else {
                    console.log("Invalid indices");
                }
                break;
            case "Make":
                let upperLower = tokens[1];
                if (upperLower === "Upper") {
                    let uppercase = string.toUpperCase();
                    string = uppercase;
                    console.log(uppercase);
                } else {
                    let lowercase = string.toLowerCase();
                    string = lowercase;
                    console.log(string);
                }
                break;
            case "Check":
                let checkedString = tokens[1];
                if (string.includes(checkedString)) {
                    console.log(`Message contains ${checkedString}`);
                } else {
                    console.log(`Message does't contains ${checkedString}`);
                }
                break;
            case "Sum":
                startIndex = Number(tokens[1]);
                endIndex = Number(tokens[2]);
                if (startIndex >= 0 && startIndex < string.length - 1 &&
                    endIndex > startIndex && endIndex < string.length) {
                    let cutString = string.substr(startIndex, endIndex);
                    let sum = 0;
                    for (let i = 0; i < cutString.length; i++) {
                        sum += cutString.charCodeAt(i);
                    }
                    console.log(sum);
                } else {
                    console.log("Invalid indices");
                }
                break;
        }
        command = params.shift();
    }
}
decryptingCommands([
    "ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"])