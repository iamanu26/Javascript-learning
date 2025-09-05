const accountId = 144553
let accountEmail = "anuragdubey26202@gmail.com"
var accountPassword = "123544"
accountCity = "Mirzapur"

//accountId = 123  // we can not change the const;
accountEmail = "anurag@1256"
accountCity = "Grater Noida"

/*
prefer to do not use var 
because of issue in block scope and functional scope
*/
console.log(accountEmail);
console.table([accountId , accountEmail , accountPassword , accountCity])
