// let myName = "Anurag      "
// let mychanel = "toKnow       "

// //console.log(myName.trim().length)

// console.log(myName.trueLength)


let myHeros = ["thor" , "spiderman"];

let heroPower ={
    thor :"Hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.anurag = function(){
    console.log("It is every where");
}

Array.prototype.heyAnurag = function(){
    console.log(`Anurag says hello`);
    
}
myHeros.anurag();
myHeros.heyAnurag();
//heroPower.heyAnurag();
/*
 we havent give the power of heyanurag to object , we onlty give it to array 
so thats why higher heirerchy object does not support heyAnurag but if we give any prototype to object then it can be
accessable by the lower herirchy.

Array()---------------->Object------->NULL
  |                       |
  V                       V
  heyAnurag()           anurag()
        ^-----------------|  

             anurag() // because the every thing in js is object thats why arry will comes under the object that why 
             it have property anurag() , and this is why object is not able to access the property of array, here
             heyAnurag();                
*/


//INHERITANCR

const Teacher = {
    makeViedo:true
}

const TeacherSupporut ={
    isAvilable:false
}

const TASupport =  {
    makeAssignment : 'JS assingment',
    fullTime : true,
    // old tech. to implementing the inheritance
    __proto__: TeacherSupporut
}
// old tech. to implementing the inheritance
//Teacher.__proto__ = user;


//Modern technique to implement the inheritance

Object.setPrototypeOf(TeacherSupporut , Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Anurag".trueLength();
"ColdCoffe   ".trueLength();