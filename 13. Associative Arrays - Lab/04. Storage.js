function storage(input) {
    let map = new Map();

    for (let line of input) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (!map.has(product)) {
            map.set(product, +quantity);
        } else {
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity += quantity;
            map.set(product, newQuantity);
        }
    }
    for (let elements of map) {
        console.log(`${elements[0]} -> ${elements[1]}`);
    }
}
storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);