var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        return this.name + ": " + this.age;
    };
    return Person;
}());
var Students = (function (_super) {
    __extends(Students, _super);
    function Students(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    Students.prototype.tellSchool = function () {
        return this.name + ":" + this.age + ": " + this.school;
    };
    return Students;
}(Person));
