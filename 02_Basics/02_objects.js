// OBJECT LITERALS 
// decleration of symbols
const mySym = Symbol("Key1")


const jsUser = {
    name: "Anurag",
    "Full Name" : "Anurag Dubey",
    age: 20,
    location: "Mirzapur",
    [mySym] : "anurag"
}

//console.log(jsUser.name)
//console.log(jsUser["name"]) // we use this method when the key have space because dot is not able to access it , 
                                // see the example.

// console.log(jsUser["Full Name"])
// console.log(jsUser[mySym]) // symbols are access by square box notation

jsUser.greeting = function(){
    console.log("Hello sir , how are you")
}
jsUser.greeting = function(){
    console.log(`Hello ${this["Full Name"]} , how are you`)
}

//console.log(jsUser.greeting)
console.log(jsUser.greeting())