var Person = (function () {
    function Person() {
    }
    Person.prototype.tell = function () {
        alert(Person._name);
    };
    return Person;
}());
var Greeting = (function () {
    function Greeting(message) {
        this.greeting = message;
    }
    Greeting.prototype.greet = function () {
        return "Hello" + this.greeting;
    };
    return Greeting;
}());
// Person class invoked
var p = new Person();
Person._name = "asd";
console.log(p.tell());
// Greeting class invoked.
var greet;
greet = new Greeting("Hello");
console.log(greet.greet());
