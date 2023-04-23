function inventory(input) {
    let heroes = [];

    input.forEach(command => {
        let [name, level, items] = command.split(' / ');
        let hero = { name, level: Number(level), items };
        heroes.push(hero);
    });
    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach((hero) => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])