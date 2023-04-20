function requiredReading(numberOfPages, pagesPerHour, days) {

    let neededHoursForReading = (numberOfPages / pagesPerHour) / days;
    console.log(neededHoursForReading);
}
requiredReading(212, 20, 2)