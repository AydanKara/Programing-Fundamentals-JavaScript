function login(params) {
    let username = params[0];
    let password = "";

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }
    let incorrectPasswordCount = 0;

    for (let i = 1; i< params.length; i++) {
        let tempPassword = params[i];
        if (tempPassword === password) {
            console.log(`User ${username} logged in.`);
        } else {
            incorrectPasswordCount++;
            if (incorrectPasswordCount === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");
        }
    }
}
login(['Acer','login','go','let me in','recA'])