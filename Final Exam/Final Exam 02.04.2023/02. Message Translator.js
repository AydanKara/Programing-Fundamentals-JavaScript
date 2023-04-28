function messageTranslator(params) {
    let n = params.shift();
    let asciiCaseArr = [];
    for (let i = 0; i < n; i++) {
        let regEx = /([\!](?<command>[A-Z][A-z]{3,})[\!])(:)(\[)(?<text>[A-Za-z]{8,})(\])/gm;
        let exec = regEx.exec(params[i]);
        if (exec) {
            let command = exec.groups["command"];
            let text = exec.groups["text"];
            for (let i = 0; i < text.length; i++) {
                let charCode = text.charCodeAt(i);
                asciiCaseArr.push(charCode);
            }
            console.log(`${command}: ${asciiCaseArr.join(" ")}`);
        } else {
            console.log("The message is invalid");
        }
    }
}
messageTranslator([
    "2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"
])