function adAstra(params) {
    let pattern = /([\|#])(?<name>[\w ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/gm;
    let exec = pattern.exec(params);
    let totalCalories = 0;
    let productsStore = [];

    while (exec) {
        let name = exec.groups['name'];
        let date = exec.groups['date'];
        let kcal = exec.groups['kcal'];

        totalCalories += Number(kcal);
        let currProductData = `Item: ${name}, Best before: ${date}, Nutrition: ${kcal}`;
        productsStore.push(currProductData);
        exec = pattern.exec(params);
    }
    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    productsStore.forEach(p => console.log(p));
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])