// ES6

class User {
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;

    }
    encryptPassword(){
            return `${this.password}abdfs`
        }
}

const Anurag = new User("Anurag" , "anurag@gmail.com" , "123")

console.log(Anurag.encryptPassword());

// behind the scene work

function User_Behind(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User_Behind.prototype.encryptPassword = function(){
    return `${this.password}ab152sdf`;
}

const Suyash = new User_Behind("Suyash" , "suyash@gmail" , "9005828");

console.log(Suyash.encryptPassword());
