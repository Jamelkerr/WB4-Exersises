
//prints a label of zip, name, city, address, state.


let myinfo = {
    zip: "302",
    name: "jam",
    city: "ATL",
    address: "227th",
    state:"Georgia"
    };

    function printlabel(myinfo){
        console.log("----------------------")
        console.log("|zip  " + myinfo.zip )
        console.log("|name  " + myinfo.name )
        console.log("|city  " + myinfo.city )
        console.log("|address  " + myinfo.address )
        console.log("|state  " + myinfo.state )
        console.log("----------------------")

    }
    printlabel(myinfo)