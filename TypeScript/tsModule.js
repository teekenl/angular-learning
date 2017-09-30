var Validation;
(function (Validation) {
    var letterRegExp = /^[A-za-z]+$/;
    var numberRegExp = /^[0-9]+$/;
    var LetterOnlyValidator = (function () {
        function LetterOnlyValidator() {
        }
        LetterOnlyValidator.prototype.isAcceptable = function (s) {
            return letterRegExp.test(s);
        };
        return LetterOnlyValidator;
    }());
    Validation.LetterOnlyValidator = LetterOnlyValidator;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegExp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
