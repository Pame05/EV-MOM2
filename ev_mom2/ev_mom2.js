'Use strict'
class User{
    constructor(username,password,email){
        this.username=username;
        this.password=password;
        this.email=email
    }
    login(username,password){
        if (username == this.username && password==this.password) {
            alert('Welcome')
        }
        else {
            alert(' Usuario o contraseña incorrecto')
        }

    }
    showInfo(){
        alert(`Usuario ${this.username} ${this.email}`)
    }
}

//Instanciar : crear un objeto a partir de la clase.

let user =new User('gpnq','1234','gpnovillo@sudamericano.edu.ec');
user.login('gpnq','1234');

class Attempt {
    constructor(user,numAttempt){
        this.user = user;
        this.numAttempt = numAttempt
    }
    showStatus(){
        alert(`El número de intentos realizados por ${this.user.username} es ${this.numAttempt}`);
    }
}

let attempt = new Attempt(user,"3")
attempt.showStatus();
