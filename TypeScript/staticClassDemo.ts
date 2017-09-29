
class Person{

    static _name:string;

    tell(){
        alert(Person._name);
    }
}

class Greeting {
    greeting:string;
    constructor(message:string){
        this.greeting = message;
    }
    greet(){
        return "Hello" + this.greeting;
    }
}

// Person class invoked
var p = new Person();
Person._name = "asd";
console.log(p.tell());


// Greeting class invoked.
var greet:Greeting;
greet = new Greeting("Hello");
console.log(greet.greet());

