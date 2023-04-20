function spiceMustFlow(startingYield) {
    let currStartingYield = startingYield;
    let leavingSpice = 0;
    let daysCounter = 0;
    while (currStartingYield >= 100) {
        daysCounter++;
        if (currStartingYield <= 26) {
            leavingSpice += currStartingYield - currStartingYield;
        } else {
            leavingSpice += currStartingYield - 26;
        }
        currStartingYield -= 10;
    }
    if (leavingSpice <= 26) {
        leavingSpice -= leavingSpice;
    } else {
        leavingSpice -= 26;
    }
    console.log(daysCounter);
    console.log(leavingSpice);
}
spiceMustFlow(450);