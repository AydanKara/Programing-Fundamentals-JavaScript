function emailValidator(params) {
    let email = params.shift();
    let commands = params.shift();
    while (commands !== "Complete") {
        let tokens = commands.split(" ");
        let command = tokens[0];
        switch (command) {
            case "Make":
                let upperLower = tokens[1];
                if (upperLower === "Upper") {
                    let uppercase = email.toUpperCase();
                    email = uppercase;
                    console.log(email);
                } else {
                    let lowercase = email.toLowerCase();
                    email = lowercase;
                    console.log(email);
                }
                break;
            case "GetDomain":
                let count = tokens[1];
                if (count < email.length && count >= 0) {
                    let startIndex = email.length - count;
                    let lastCount = email.substr(startIndex, count);
                    console.log(lastCount);
                } else {
                    console.log(email);
                }
                break;
            case "GetUsername":
                let check = "@";
                if (email.includes(check)) {
                    let index = email.indexOf(check);
                    let username = email.substr(0, index);
                    console.log(username);
                } else {
                    console.log(`The email ${email} doesn't contain the @ symbol.`);
                }
                break;
            case "Replace":
                let replacedChar = "-";
                let currentChar = tokens[1];
                while (email.includes(currentChar)) {
                    email = email.replace(currentChar, replacedChar);
                }
                console.log(email);
                break;
            case "Encrypt":
                let asciiCaseArr = [];
                for (let i = 0; i < email.length; i++) {
                    let charCode = email.charCodeAt(i);
                    asciiCaseArr.push(charCode);
                }
                console.log(`${asciiCaseArr.join(" ")}`);
                break;
        }
        commands = params.shift();
    }
}
emailValidator([
    "Mike123@somemail.com",
    "Make Upper",
    "GetDomain 3",
    "GetUsername",
    "Encrypt",
    "Complete"])

    // Input
    // •	The possible commands are:
    // o	"Complete"
    // o	"Make Upper"
    // o	"Make Lower"
    // o	"GetDomain {count}"
    // o	"GetUsername"
    // o	"Replace {char}"
    // o	"Encrypt"
    // Output
    // •	The possible outputs are:
    // o	"The email {email} doesn't contain the @ symbol."

