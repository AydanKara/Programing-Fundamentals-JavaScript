function computerStore(input) {
    let totalWithoutTaxes = 0;
    let index = 0;
    while (input[index] !== "special" && input[index] !== "regular") {
        if (input[index] < 0) {
            console.log("Invalid price!");
            index++;
            continue;
        }
        totalWithoutTaxes += Number(input[index]);
        index++;
    }
    if (totalWithoutTaxes == 0) {
        console.log("Invalid order!");
        return;
    }
    let taxes = totalWithoutTaxes * 0.2;
    let total = totalWithoutTaxes + taxes;
    if (input[index] === "special") {
        total *= 0.9;
    }
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${totalWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${total.toFixed(2)}$`);
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])

/*
([ 
'1023',  
'15',  
'-20', 
'-5.50', 
'450',  
'20',  
'17.66',  
'19.30', 
'regular' 
]) 
*/