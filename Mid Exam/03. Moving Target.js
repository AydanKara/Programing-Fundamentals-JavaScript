function movingTarget(input) {
    let sequenceOfTargets = input.shift().split(' ').map(x => Number(x));
    let i = 0;
    while (input[i] !== 'End') {
        let [command, index, token] = input[i].split(' ');
        index = Number(index);
        token = Number(token);
        if (command === 'Shoot') {
            // Shoot the target at the index if it exists
            if (sequenceOfTargets[index]) {
                // shot at target
                sequenceOfTargets[index] -= token;
                // remove if shot
                if (sequenceOfTargets[index] <= 0) {
                    sequenceOfTargets.splice(index, 1);
                }
            }
        } else if (command === 'Add') {
            // Add the token to the target if it exists
            if (sequenceOfTargets[index]) {
                sequenceOfTargets.splice(index, 0, token);
            } else {
                console.log("Invalid placement!");
            }
        } else if (command === 'Strike') {
            let minIndex = index - token;
            let maxIndex = index + token;
            if (sequenceOfTargets[minIndex] && sequenceOfTargets[maxIndex]) {
                sequenceOfTargets.splice(minIndex, token * 2 + 1);
            } else {
                console.log("Strike missed!");
            }
        }
        i++;
    }
    console.log(sequenceOfTargets.join('|'));
}
movingTarget([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])