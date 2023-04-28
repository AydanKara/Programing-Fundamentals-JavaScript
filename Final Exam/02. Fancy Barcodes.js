function fancyBarcodes(params) {
    let n = Number(params.shift());
    for (let i = 0; i < n; i++) {
        let regEx = /(@#{1,})([A-Z][A-Za-z0-9]{4,})[A-Z](@#{1,})/gm;
        let productGroup = "";

        if (params[i].match(regEx)) {
            let barcode = regEx.exec(params[i]);
            let barcodeGroup = barcode[2];
            for (let char of barcodeGroup) {
                if (!isNaN(char)) {
                    productGroup += char;
                }
            }
            if (productGroup.length === 0) {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${productGroup}`);
            }

            continue;
        }
        console.log("Invalid barcode");
    }
}
fancyBarcodes([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
])
