var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.print = function () {
        return this.name + ": " + this.age;
    };
    return Person;
}());
var p = new Person("kenlau5", 12);
console.log(p.print());
