function multipleBy5(num){
    return num*5
}
// every thing in javascript ends to the object i.e function is also object

// Array------>Object------->NULL
//String------->Object------>NULL
//Function------->Object------>NULL

multipleBy5.power = 3;

console.log(multipleBy5(5));
console.log(multipleBy5.power(5));
console.log(multipleBy5.prototype)
//in the above statement we get output as {} this give the prototype of current functional object


function creatUser(username , score){
    this.username = username;
    this.score = score
}

creatUser.prototype.increment = function(){
    this.score++;
}

creatUser.prototype.printMe = function(){
    console.log(`Score id ${this.score}`);
    
}

const anurag =new creatUser("Anurag" , 25)
const suyash = new creatUser("Suyash" , 250) 

anurag.printMe()