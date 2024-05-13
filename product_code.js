"use strict";




parsePartCode("XYZ :1234-L");

function parsePartCode(value) {
    let supplier = value.indexOf(":");
    let product = value.indexOf("-");

    let supplierCode = value.substring(0, supplier);
    let productNumber = value.substring(supplier + 1, product);
    let size = value.substring(product + 1);

   console.log("Supplier: " + supplierCode + '\n' + "Product Number: " + productNumber + '\n' + "Size: " + size);
}

parsePartCode("XYZ :1234-L");