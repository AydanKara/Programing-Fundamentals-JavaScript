function triplesOfLatinLetters(num) {

    for (let i = 0; i < num; i++) {
        let letteri = String.fromCharCode(97 + i);
        for (let j = 0; j < num; j++) {
            let letterj = String.fromCharCode(97 + j);
            for (let k = 0; k < num; k++) {
                let letterk = String.fromCharCode(97 + k);
                console.log(letteri + letterj + letterk);
            }
        }
    }
}
triplesOfLatinLetters(2);