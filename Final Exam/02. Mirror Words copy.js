function mirrorWords(params) {
    let regExOne = /([@#])(?<first>[A-Za-z]{3,})\1\1(?<second>[a-zA-Z]{3,})\1/gm;
    let hiddenWordPairs = regExOne.exec(params);
    let hiddenWordStore = [];
    let mirrorWordsStore = [];
    while (hiddenWordPairs) {
        let first = hiddenWordPairs.groups["first"];
        let second = hiddenWordPairs.groups["second"];
        hiddenWordStore.push(first);
        hiddenWordStore.push(second);
        hiddenWordPairs = regExOne.exec(params);
    }
    if (hiddenWordStore.length == 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${hiddenWordStore.length / 2} word pairs found!`);
    }
    for (let i = 0; i < hiddenWordStore.length; i += 2) {
        let word = hiddenWordStore[i].split("");
        let mirror = hiddenWordStore[i + 1].split("");
        let count = 0;
        for (let j = 0; j < word.length; j++) {
            if (word.length == mirror.length) {
                let w = word[j];
                let m = mirror[mirror.length - j - 1];
                if (w === m) {
                    count++;
                    if (count == word.length) {
                        mirrorWordsStore.push(word.join(""));
                        mirrorWordsStore.push(mirror.join(""));
                    }
                } else {
                    break;
                }
            }
        }
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
    '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'
])