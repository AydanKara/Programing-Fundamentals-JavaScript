function mirrorWords(params) {
    let regExOne = /([@#])(?<first>[A-Za-z]{3,})\1\1(?<second>[a-zA-Z]{3,})\1/gm;
    let hiddenWordPairs = regExOne.exec(params);
    let regExTwo = /([@]|[#])\b([A-Za-z])([A-Za-z])([A-Za-z])(?:([A-Za-z])(?:([A-Za-z])(?:([A-Za-z])(?:([A-Za-z])(?:([A-Za-z])(?:([A-Za-z])(?:([^\s]))?)?)?)?)?)?)?\b\1\1(\b((?:(?:(?:(?:(?:(?:(?:\11)?\10)?\9)?\8)?\7)?\6)?\5)?\4\3\2)\b)\1/gm;
    let mirrorWordsMatch = regExTwo.exec(params);
    let hiddenWordStore = [];
    let mirrorWordsStore = [];
    while (hiddenWordPairs) {
        let first = hiddenWordPairs.groups["first"];
        hiddenWordStore.push(first);
        hiddenWordPairs = regExOne.exec(params);
    }
    while (mirrorWordsMatch) {
        let i = 2;
        let mirrorWord = [];
        let mirrorWordChar = [];
        while (mirrorWordsMatch[i] !== undefined) {
            mirrorWordChar.push(mirrorWordsMatch[i]);
            i++;
        }
        mirrorWord = mirrorWordChar.join("");
        mirrorWordsStore.push(mirrorWord);
        mirrorWordsStore.push(mirrorWordsMatch[12]);
        mirrorWordsMatch = regExTwo.exec(params);
    }
    if (hiddenWordStore.length == 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${hiddenWordStore.length} word pairs found!`);
    }
    if (mirrorWordsStore.length == 0) {
        console.log(`No mirror words!`);
    } else {
        let arr = [];
        for (let i = 0; i < mirrorWordsStore.length; i += 2) {
            arr.push(mirrorWordsStore[i] + " <=> " + mirrorWordsStore[i + 1]);
        }
        console.log(`The mirror words are:`);
        console.log(`${arr.join(", ")}`);
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])