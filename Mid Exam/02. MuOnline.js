function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let room = 0;
    let areYouDead = false;
    // 1. split rooms from input
    let rooms = input.split('|');

    // 2. loop through rooms
    for (let i = 0; i < rooms.length; i++) {
        let currentRoom = rooms[i];
        // 3. split room
        let [command, amount] = currentRoom.split(' ');
        amount = Number(amount);
        room++;
        // 4. check command from each room
        if (command === 'potion') {
            let missingHealth = 100 - health;
            let restoredHealth = Math.min(amount, missingHealth);
            health += restoredHealth;
            console.log(`You healed for ${restoredHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            bitcoins += amount;
            console.log(`You found ${amount} bitcoins.`);
        } else {
            health -= amount;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${room}`);
                areYouDead = true;
                break;
            }
        }
    }
    // 5. check if you died
    if (areYouDead === false) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");