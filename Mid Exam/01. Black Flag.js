function blackFlag(input) {
    // collect input data
    let days = Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());

    // variables
    let totalPlunder = 0;

    // loop days
    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;

        // 3th day
        if (i % 3 === 0) {
            totalPlunder += dailyPlunder / 2;
        }
        // 5th day
        if (i % 5 === 0) {
            totalPlunder *= 0.7;
        }
    }
    // print output
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (totalPlunder / expectedPlunder) * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["10", "20", "380"])