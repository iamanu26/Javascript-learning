const promiseOne = new Promise(function(resolve , reject){
    //Do an async task
    // DB call , cryptography , networl
    setTimeout(function(){
        console.log('ASYNC task completed');
        resolve()
    } , 1000)
})

promiseOne.then(function(){
    console.log('PROMISE CONSUMED');
    
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("ASYNC 2 RESOLVE");
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"Anurag", email:"anuragdubey26202@gmail.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Anurag",password:"123"})
        }else{
            reject('ERROR   something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise either resolve or rejected"))


const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
             resolve({user:"JavaScript", password:"123"})
        }else {
            reject('JS went Wrong')
        }
    } , 1000)
});
// async await cannot handel the error directly so in case if our promise through the error for that purpose we 
// we have to store it in the try and catch method.
async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error)
    }
    
}

consumePromiseFive();


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch(error){
//         console.log("E: " ,error);
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error)
})
.finally((ok)=>{
    console.log("then and catch have executed")
})