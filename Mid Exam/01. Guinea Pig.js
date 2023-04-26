function guineaPig(input) {
    // 1. Read input
    let food = Number(input.shift()) * 1000;
    let hay = Number(input.shift()) * 1000;
    let cover = Number(input.shift()) * 1000;
    let weight = Number(input.shift()) * 1000;
    let mustGoToStore = false;

    // 1 mount = 30 days
    for (let i = 1; i <= 30; i++) {
        // 2.  Every day Puppy eats 300 gr of food
        food -= 300;
        /* 3.  Every second day first feeds the pet, 
        then gives it a certain amount of hay 
        equal to 5% of the rest of the food. */
        if (i % 2 === 0) {
            hay -= 0.05 * food;
        }
        /* 4.  On every third day, Merry puts Puppy cover 
        with a quantity of 1/3 of its weight. */
        if (i % 3 === 0) {
            cover -= weight / 3;
        }

        if (food <= 0 || hay <= 0 || cover <= 0) {
            mustGoToStore = true;
            break;
        }
    }
    console.log(mustGoToStore
        ? `Merry must go to the pet store!`
        : `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
}
guineaPig([
    "10",
    "5",
    "5.2",
    "1"])