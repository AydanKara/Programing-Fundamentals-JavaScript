function passwordReset(params) {
    let password = params.shift();
    let line = params.shift();

    while (line !== "Done") {
        line = line.split(" ");
        let command = line[0];
        switch (command) {
            // TakeOdd
            case "TakeOdd":
                let newPassword = "";
                for (let i = 1; i < password.length; i += 2) {
                    newPassword += password[i];
                }
                password = newPassword;
                console.log(password);
                break;
            // Cut {index} {length}
            case "Cut":
                let index = Number(line[1]);
                let length = Number(line[2]);
                let cutString = password.substr(index, length);
                password = password.replace(cutString, "");
                console.log(password);
                break;
            // Substitute {substring} {substitute}
            case "Substitute":
                let substring = line[1];
                let substitute = line[2];
                if (password.includes(substring)) {
                    while (password.includes(substring)) {
                        password = password.replace(substring, substitute);
                    }
                    console.log(password);
                } else {
                    console.log(`Nothing to replace!`);
                }
                break;
        }
        line = params.shift();
    }
    console.log(`Your password is: ${password}`);
}
passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
])
