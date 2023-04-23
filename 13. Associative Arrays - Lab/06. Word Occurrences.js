function wordOccurrences(input) {
    let words = new Map();
    for (const word of input) {
        let occurs = 1;
        if (words.has(word)) {
            let currentOccurs = words.get(word);
            let newOccurs = currentOccurs + occurs;
            words.set(word, newOccurs);
        } else {
            words.set(word, occurs);
        }
    }
    let sorted = Array.from(words).sort((a, b) => b[1] - a[1]);
    for (const iterator of sorted) {
        console.log(`${iterator[0]} -> ${iterator[1]} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])