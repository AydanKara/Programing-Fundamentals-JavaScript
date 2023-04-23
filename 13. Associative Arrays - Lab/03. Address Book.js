function addressBook(input) {
    let addBook = {};
    for (let line of input) {
        let [name, address] = line.split(':');
        addBook[name] = address;
    }
    let sorted = Object
        .entries(addBook)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let key in sorted) {
        console.log(`${sorted[key].join(' -> ')}`);
    }
}
addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])