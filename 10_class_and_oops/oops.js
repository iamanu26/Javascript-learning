//const { use } = require("react");

const user = {
    username :"Anurag Dubey",
    loginCount:"10",
    signedIn:true,

    getUserDetail:function(){
       // console.log("Got detail from the data base");
       console.log(`UserName ${this.username}`); // if we dont use it will show username is not define,
       // by using this we say it to get the current context detail.

       console.log(this); // it will print the current context i.e. our user object
       
       
        
    }

  
}

//console.log(user.username);
// console.log(user.getUserDetail());


function User(Username , loginCount , isLoggedIn){
    this.Username= this.Username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`); 
    }

    return this;
}

const userOne = new User("Anurag" , 12 , true)
const userTwo = new User("Suyash" , 15 , false)

console.log(userOne);
console.log(userTwo);
