function countString(text, word) {
    let words = text.split(' ');
    let counter = 0;
    for (const string of words) {
        if (string === word) {
            counter++;
        }
    }
    console.log(counter);
}
countString('This is a word and it also is a sentence',
'is')