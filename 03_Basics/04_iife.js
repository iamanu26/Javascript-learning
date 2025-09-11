//Immediatly Invoked Function Expression

// some time we phase the problem due to the globle scope so for being on the safer side we use iife the execute after decleration

// named iife
(function chai(){
    console.log(`DB CONNECTED`);
})();


//unnamed iife
( (name) => {
    console.log(`DB TWO CONNECTED ${name}`)
})("anurag")