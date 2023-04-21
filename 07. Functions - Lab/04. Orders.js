function orders(products, quantity) {
    if (products === "water") {
        quantity *= 1;
    } else if (products === "coffee") {
        quantity *= 1.5;
    } else if (products === "coke") {
        quantity *= 1.4;
    } else if (products === "snacks") {
        quantity *= 2;
    }
    console.log(quantity.toFixed(2));
}
orders("water", 5);