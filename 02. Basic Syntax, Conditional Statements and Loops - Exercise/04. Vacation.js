function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {

    let pricePerPerson = 0;
    let total = 0;

    if (typeOfTheGroup === "Students") {
        if (dayOfTheWeek === "Friday") {
            pricePerPerson = 8.45;
        } else if (dayOfTheWeek === "Saturday") {
            pricePerPerson = 9.80;
        } else if (dayOfTheWeek === "Sunday") {
            pricePerPerson = 10.46;
        }

        total = groupOfPeople * pricePerPerson;

        if (groupOfPeople >= 30) {
            total = groupOfPeople * pricePerPerson * 0.85;
        }
    } else if (typeOfTheGroup === "Business") {
        if (dayOfTheWeek === "Friday") {
            pricePerPerson = 10.90;
        } else if (dayOfTheWeek === "Saturday") {
            pricePerPerson = 15.60;
        } else if (dayOfTheWeek === "Sunday") {
            pricePerPerson = 16;
        }

        total = groupOfPeople * pricePerPerson;

        if (groupOfPeople >= 100) {
            total = (groupOfPeople - 10) * pricePerPerson;
        }
    } else if (typeOfTheGroup === "Regular") {
        if (dayOfTheWeek === "Friday") {
            pricePerPerson = 15;
        } else if (dayOfTheWeek === "Saturday") {
            pricePerPerson = 20;
        } else if (dayOfTheWeek === "Sunday") {
            pricePerPerson = 22.50;
        }

        total = groupOfPeople * pricePerPerson;

        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            total = groupOfPeople * pricePerPerson * 0.95;
        }
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday");