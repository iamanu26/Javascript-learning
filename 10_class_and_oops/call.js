 function SetUsername(username){
    // complex DB calls;
    this.username = username;
    console.log("Called");
    
 }

 function creatUser(username , email , password){

    SetUsername.call(this ,username); // we are giving (this) to give the access of current context , other wise when set user function go out of the 
                                        //current context the user name will be lost.

    this.email = email;
    this.password = password; 
 }

 const anurag = new creatUser("Anurag" , "anurag@google.com" , "12345")
 console.log(anurag);
 