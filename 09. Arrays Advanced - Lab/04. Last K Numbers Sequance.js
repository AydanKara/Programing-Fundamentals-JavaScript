function sumLastKNumbersSequence(n, k) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
        let sequenceK = seq.slice(-k);
        let sum = 0;
        for (let el of sequenceK) {
            sum += el;
        }
        seq.push(sum);
    }
    console.log(seq.join(` `));
}
sumLastKNumbersSequence(8,2);