

module Validation {

    export interface StringValidator {
        isAcceptable(s:string):boolean;
    }

    var letterRegExp = /^[A-za-z]+$/;
    var numberRegExp = /^[0-9]+$/;

    export class LetterOnlyValidator implements StringValidator {
        isAcceptable(s:string):boolean {
            return letterRegExp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return s.length === 5 && numberRegExp.test(s);
        }
    }

}

