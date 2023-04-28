function theImitationGame(params) {
    let arr = params.slice();
    let message = arr.shift();
    let tempMessage = [];
    let currLine = arr.shift();

    while (currLine !== 'Decode') {
        let tokens = currLine.split('|');
        let command = tokens[0];
        switch (command) {
            case 'Move':
                let lettersNumber = Number(tokens[1]);
                let lettersToMove = message.substring(0, lettersNumber);
                tempMessage = message.replace(lettersToMove, "");
                tempMessage += lettersToMove;
                message = tempMessage;
                break;
            case 'Insert':
                let index = Number(tokens[1]);
                let value = tokens[2];
                tempMessage = message.split(''); // ['l', 'l', 'H', 'e']
                tempMessage.splice(index, 0, value); // ['l', 'l', 'o', 'H', 'e']
                message = tempMessage.join(''); // 'lloHe'
                break;
            case 'ChangeAll':
                let substring = tokens[1];
                let replacement = tokens[2];

                while(message.includes(substring)) {
                    tempMessage = message.replace(substring, replacement);
                    message = tempMessage;
                }
                break;
        }
        currLine = arr.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])