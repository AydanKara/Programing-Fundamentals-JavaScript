function modernTimes(text) {
    const words = text.split(' ');
    words.forEach(word => {
        const isValid = word.startsWith('#') && word.length > 1;
        if (isValid) {
            let isLetter = true;
            let wordCopy = '';
            for (let i = 1; i < word.length; i++) {
                const char = word[i].toLowerCase();
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isLetter = false;
                    break;
                } else {
                    wordCopy += word[i];
                }
            }
            if (isLetter) {
                console.log(wordCopy);
            }
        }
    });
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')