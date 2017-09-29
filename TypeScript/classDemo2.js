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
var People = (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    People.prototype.print = function () {
        return this.name + ":" + this.age;
    };
    return People;
}());
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(school, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    Teacher.prototype.print = function () {
        return this.name + ": " + this.school;
    };
    return Teacher;
}(People));
