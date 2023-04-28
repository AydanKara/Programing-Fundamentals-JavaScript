function needForSpeed(params) {
    let carsNumber = Number(params.shift());
    let maxMileage = 100000;
    let maxTankFuel = 75;
    let cars = {};
    let carsArray = [];
    for (let i = 0; i < carsNumber; i++) {
        let command = params.shift().split('|');

        // "{car}|{mileage}|{fuel}"
        let car = command[0];
        let mileage = Number(command[1]);
        let fuel = Number(command[2]);
        cars = { car, mileage, fuel };
        carsArray.push(cars);
    }
    let car = "";
    let distance = 0;
    let fuel = 0;
    let findCar = undefined;
    let index = -1;
    let fueled = 0;
    while (params[0] !== 'Stop') {
        let line = params.shift().split(' : ');
        let command = line[0];
        switch (command) {
            // Drive : {car} : {distance} : {fuel}
            case "Drive":
                car = line[1];
                distance = Number(line[2]);
                fuel = Number(line[3]);
                findCar = carsArray.find((x) => x.car === car && x.fuel >= fuel);
                index = carsArray.indexOf(findCar);
                if (findCar) {
                    carsArray[index].fuel -= fuel;
                    carsArray[index].mileage += distance;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                    if (carsArray[index].mileage > maxMileage) {
                        console.log(`Time to sell the ${car}!`);
                        carsArray.splice(index, 1);
                    }
                } else {
                    console.log(`Not enough fuel to make that ride`);
                }
                break;
            // Refuel : {car} : {fuel}
            case "Refuel":
                car = line[1];
                fuel = Number(line[2]);
                findCar = carsArray.find((x) => x.car === car);
                index = carsArray.indexOf(findCar);
                let currentFuel = carsArray[index].fuel;
                currentFuel += fuel;
                if (currentFuel > maxTankFuel) {
                    fueled = maxTankFuel - carsArray[index].fuel;
                    carsArray[index].fuel = maxTankFuel;
                } else {
                    carsArray[index].fuel += fuel;
                    fueled = fuel;
                }
                console.log(`${carsArray[index].car} refueled with ${fueled} liters`);
                break;
            // Revert : {car} : {kilometers}
            case "Revert":
                car = line[1];
                let kilometers = line[2];
                findCar = carsArray.find((x) => x.car === car);
                index = carsArray.indexOf(findCar);
                carsArray[index].mileage -= kilometers;
                if (carsArray[index].mileage < 10000) {
                    carsArray[index].mileage = 10000;
                } else {
                    console.log(`${carsArray[index].car} mileage decreased by ${kilometers} kilometers`);
                }
                break;
        }
    }
    carsArray.forEach(c => console.log(`${c.car} -> Mileage: ${c.mileage} kms, Fuel in the tank: ${c.fuel} lt.`))
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])
