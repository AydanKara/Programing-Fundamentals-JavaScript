function coffeeLover(input) {
    let coffeeNames = input.shift().split(' ');
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let [commands, token1, token2] = input.shift().split(' ');
        if (commands === 'Include') {
            coffeeNames.push(token1);
        } else if (commands === 'Remove') {
            if (Number(token2) <= coffeeNames.length) {
                if (token1 === 'first') {
                    coffeeNames.splice(0, Number(token2));
                } else if (token1 === 'last') {
                    coffeeNames.splice(-Number(token2));
                }
            }
        } else if (commands === 'Prefer') {
            if (coffeeNames[token1] && coffeeNames[token2]) {
                let first = coffeeNames[Number(token1)];
                let second = coffeeNames[Number(token2)];
                coffeeNames.splice(Number(token1), 1, second);
                coffeeNames.splice(Number(token2), 1, first);
            }
        } else if (commands === 'Reverse') {
            coffeeNames.reverse();
        }
    }
    console.log('Coffees:');
    console.log(coffeeNames.join(' '));
}
coffeeLover([
    "Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"]);