
let a = 100
if(true)
{
let a = 10
const b = 20
//var c = 30  it heve no scope 

}

//console.log(a); // it will throgh error because of undefine element
//console.log(b); // it will throgh error because of undefine element

 function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two();
    
 }

 //one()

 function addone(num){
    return num + 1
 }

 addone(5)

 const addTwo = function (num){
    //this method is also known as function hosting and we cannot initilize this type of function before decleration , other can;
    return num+2
 }
 addTwo(5)
