function activationKeys(params) {
    // input & result data
    // let [rawActivationKey, ...instructions] = params;
    let activationKey = params.shift();
    let instructions = params.slice();

    // loop through instructions
    let instruction = instructions.shift();
    while (instruction !== "Generate") {
        // apply instruction
        let arguments = instruction.split(">>>");
        let instructionName = arguments.shift();
        let startIndex = 0;
        let endIndex = 0;
        let substring = 0;

        switch (instructionName) {
            case "Contains":
                substring = arguments[0];
                if (activationKey.includes(substring)) {
                    console.log(`${activationKey} contains ${substring}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
            case "Flip":
                let casing = arguments[0];
                startIndex = arguments[1];
                endIndex = arguments[2];
                let part = activationKey.substring(startIndex, endIndex);
                let newPart = casing === "Upper" ? part.toUpperCase() : part.toLowerCase();
                activationKey = activationKey.replace(part, newPart);
                console.log(activationKey);
                break;
            case "Slice":
                startIndex = arguments[0];
                endIndex = arguments[1];
                substring = activationKey.substring(startIndex, endIndex);
                activationKey = activationKey.replace(substring, "");
                console.log(activationKey);
                break;
        }

        // get next instruction
        instruction = instructions.shift();
    }

    // print generated activation keys
    console.log(`Your activation key is: ${activationKey}`);
}
activationKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])