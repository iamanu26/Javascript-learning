//+++++++++++++++++++++++++++++++++++ DATA TYPES +++++++++++++++++++++++++++++++++===
/* 
 Primitive data types(NON RFERENCE DATA TYPE)
 7 types = String , Number , Boolean, Null , Undefined , symbols , BigInt;

*/
const score = 100;
const num = 100.235;
const isLoggedIn = false;
const outSideTemp = null;
let usearEmail; // assinged as undefined;
const anotherId = Symbol('123');
const id = Symbol('123');
//console.log(id === anotherId);

/*
NON PRIMITIVE DATA TYPE (REFERENCE DATA TYPE)

Array , Objects , Functions
*/

const heros = ["saktiman" , "naagraj" , "doga"];
let myObj = {
    name: "Anurag",
    age:20,
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack -----> used in primitive data tppe , 
// Heap  -----> used in non-primitive datatype

let myName = "Anurag";
let another_name = myName;
console.log(myName);
console.log(another_name);


myName = "Suyash";
console.log(myName);
console.log(another_name);
