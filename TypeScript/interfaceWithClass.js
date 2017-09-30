var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.getCurrentTime = function () {
        return this.currentTime;
    };
    Clock.prototype.setCurrentTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
