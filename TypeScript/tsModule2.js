var Time;
(function (Time) {
    var Test = (function () {
        function Test(e) {
            this.element = e;
            this.element.innerHTML = "The time now is";
            this.span = document.createElement("span");
            this.element.appendChild(this.span);
            this.span.innerHTML = new Date().toTimeString();
        }
        Test.prototype.start = function () {
            var _this = this;
            this.timer = setInterval(function () { return _this.span.innerHTML = new Date().toTimeString(); });
        };
        Test.prototype.stop = function () {
            clearInterval(this.timer);
        };
        return Test;
    }());
    Time.Test = Test;
})(Time || (Time = {}));
