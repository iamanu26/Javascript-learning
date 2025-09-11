const user = {
    username : "anurag",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
        
    }
}

//  user.welcomeMessage()

//  user.username = "sam"

//  user.welcomeMessage()

//console.log(this)

// function enviornment(){
//     let username = "Anurag"
//     console.log(this.username);
    
// }

// enviornment()


// ARROW FUNCTION
const chai = () => {
    let username = "Anurag"
    console.log(this);
}

// ARROW FUNCTION BY USING EXCPLIT RETURN 
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// ARROW FUNCTION BY USING THE IMPLICIT RETURN

//const addTwo = (num1 , num2) => num1 + num2


//const addTwo = (num1 , num2) => (num1 + num2)


const addTwo = (num1 , num2) => ({username : "anurag"})
console.log(addTwo(3,4))



