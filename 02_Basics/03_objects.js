
//Way of decleration of objects
//const tinderUser = new Object()


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name ="jimmy"
tinderUser.isLoogedin = false
//console.log( tinderUser)


const regularUser = {
    fullname: {
        userfullname : {
            firstName : "Anurag",
            lastName : "Dubey"
        }
    }
}
//console.log(regularUser)
//console.log(regularUser.fullname.userfullname.firstName)

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj3 = {5:"a" , 6:"b"}

//const obj4 = {obj1 , obj2}  // it will not concatinate the object , it will jus put the obj in the obj

//const obj4 = Object.assign({}, obj1 , obj2 , obj3)

const obj4 = {...obj1 , ...obj2,...obj3}
// console.log(obj4);

// console.log(Object.keys(tinderUser))   //it will give us the  array of keys by which we can iterate it by indexing in multiple places


// console.log(tinderUser.hasOwnProperty('Anurag'))

  // Destructing of the object 


const course = {
    coursename : "js on hindi",
    price : "9999",
    courseInstructor : "Anurag"

}

//course.courseInstructor

const {courseInstructor : instructor} = course //{key from object : new name(optional)} = object_name

console.log(courseInstructor);
