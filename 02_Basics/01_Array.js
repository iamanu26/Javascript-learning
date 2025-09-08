//ARRAYS  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myArray = [10 , 20  , 50]

// for(let i = 0 ; i<myArray.length ; i++)
// {
//     console.log(myArray[i])
// }

// myArray.push("Anurag")
// console.log(myArray)
// console.log(typeof(myArray))

const marval_heros = [ "Iron Man" , "Thor" , "spiderman"]
const dc_heros = ["Supermen" , "Batman" , "Flash"]

//marval_heros.push(dc_heros)
// const all_heros = marval_heros.concat(dc_heros)
// console.log(all_heros);

// const allNewHeros = [...marval_heros , ...dc_heros]
// console.log(allNewHeros)

const another_array = [1,2,3,[4,5,6],7[6,7,[4,5]]]

const another_new_array = another_array.flat(Infinity)
console.log(another_new_array)