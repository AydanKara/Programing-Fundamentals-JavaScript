function stringSubstring(word, text) {
    const tokens = text.split(' ');
    let isFinding = false;
    tokens.forEach(token => {
        if (token.toLowerCase() === word.toLowerCase()) {
            console.log(token.toLowerCase());
            isFinding = true;
            return;
        }
    });
    if (!isFinding) {
        console.log(`${word.toLowerCase} not found!`);
    }
}
stringSubstring('javascript',
    'JavaScript is the best programming language')