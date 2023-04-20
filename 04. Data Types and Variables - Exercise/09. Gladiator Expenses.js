function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetCounter = 0;
    let swordCounter = 0;
    let shieldCounter = 0;
    let armorCounter = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            helmetCounter++;
        } if (i % 3 == 0) {
            swordCounter++;
            if (i % 2 == 0) {
                shieldCounter++;
                if (shieldCounter % 2 == 0) {
                    armorCounter++;
                }
            }
        }
    }
    let totalExpenses = helmetPrice * helmetCounter + swordPrice * swordCounter + shieldPrice * shieldCounter + armorPrice * armorCounter;
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5)