class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
        
    }

    static creatId(){
        return `123`
    }
}

const Anurag = new User("Anurag")
//console.log(Anurag.creatId());--->this will through the error because creat id is static

class Teacher extends User {
    constructor(username , email){
        super(username);
        this.email = email
    }
}

const Suyash = new  Teacher("Suyash" ,  "Suyash@gmail.com")

console.log(creatId());