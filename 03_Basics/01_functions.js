// function addTwoNumbers(number1 , number2){
//    console.log( number1 + number2);
   
// }

function addTwoNumbers(number1 , number2){
    
//    let result = number1 + number2
//    return result

      return(number1+number2) 
}

const result = addTwoNumbers(5,6)
//console.log(result);

function loginUserMessage(username){
      if(!username){
            console.log("please enter the user name ")
            return;
      }
      return `${username} just logged in`
}
//console.log(loginUserMessage());

function calculateCartPrice(...num1)
{
      return num1
}

//console.log(calculateCartPrice(200 , 400 , 500))

const user = {
      username : "anurag",
      price : 199
}

function handelObject(anyobject){
      console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
      
}

//handelObject(user)

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray){
      return getArray[1]
}

console.log(returnSecondValue(myNewArray));

