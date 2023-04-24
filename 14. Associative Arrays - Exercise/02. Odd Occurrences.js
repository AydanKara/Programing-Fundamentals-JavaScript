function oddOccurrences(words) {
    let result = {};
    let allWords = words.split(' ').map(w => w.toLowerCase());

    let allWordsLength = allWords.length;

    for (let i = 0; i < allWordsLength; i++) {
        if (!result.hasOwnProperty(allWords[i])) {
            result[allWords[i]] = [];
        }
        result[allWords[i]].push(i);
    }
    let sorted = Object.entries(result).sort((a, b) => a[1][0] - b[1][0]);
    let output = "";
    for (const el of sorted) {
        if (el[1].length % 2 !== 0) {
            output += `${el[0]} `;
        }
    }
    console.log(output);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')