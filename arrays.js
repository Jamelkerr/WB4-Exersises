"use strict"

let kids = ["natalie", "Brittany","Zachary","David","Jane","John"];

//console.log(kids[0]);
//console.log(kids[1]);
//console.log(kids[2]);
//console.log(kids[3]);
//console.log(kids[4]);
//console.log(kids[5]);

// console.log(kids.length);

let i = 0 
let totalKids = kids.length;

//while (i < totalKids){
  //  console.log(i);
    //console.log(kids[i])
    //i++
//}
for(i = 0; i < totalKids; i++){
    console.log(i + " "+ kids[i]);
}