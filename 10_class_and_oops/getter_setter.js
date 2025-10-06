class User {
    constructor(email , password){
        this.email = email;
        this.password = password
    }
    get password(){
        return `${this._password}Anurag`
    }

    set password(value){
        this._password = value;
    }

}

const anurag = new User("anu@rag.anu" , "abcdEFG");
console.log(anurag.password)