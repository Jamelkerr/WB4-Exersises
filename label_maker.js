"use strict";
// finds name,address, and connects the zip with city and state
let myvar = {
    name:"jamel",
    address: "123",
    city: "ATL",
    state: "geogia",
    zip: "000000",



};

printcontact(myvar);

function printcontact(contact) {
console.log(contact.name);
console.log(contact.address);
console.log(`${contact.city}, ${contact.state} ${contact.zip}`)




}