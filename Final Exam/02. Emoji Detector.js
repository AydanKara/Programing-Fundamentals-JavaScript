function emojiDetector(params) {
    // input 
    let text = params.shift();
    let emojiCount = 0;
    let coolEmojis = [];
    // get all digits and calculate threshold
    let threshold = 1;
    let digitResults = text.matchAll(/\d/g);
    for (const digitResult of digitResults) {
        let digit = Number(digitResult[0]);
        threshold *= digit;
    }
    console.log(`Cool threshold: ${threshold}`);

    // get all emoji
    let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/gm);
    for (const emojiMatch of emojiMatches) {
        let emoji = emojiMatch[0];
        let emojiName = emojiMatch.groups.name;
        emojiCount++;

        // calculate emoji coolness
        let emojiCoolness = 0;
        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolness += emojiName.charCodeAt(i);
        }

        if (emojiCoolness >= threshold) {
            coolEmojis.push(emoji);
        }
    }
    // print results
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    coolEmojis.forEach(emoji => console.log(emoji));
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total!::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:,12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21different types of :Snak::Es::. ::Mooning:: **Shy**"])