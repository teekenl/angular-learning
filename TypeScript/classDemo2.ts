
class People{
    name:string;
    private _age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this._age = age;
    }

    get age():number {
        return this._age;
    }

    set age(newage:number){
        if(newage > 200 || newage < 0) {
            alert('Please enter a valid age');
        } else {
            this._age = newage;
        }
    }

    print() {
        return this.name + ":" + this.age;
    }
}

class Teacher extends People {
    school:string;
    constructor(school:string,name:string,age:number){
        super(name, age);
        this.school = school;
    }

    print() {
        return this.name + ": " + this.school;
    }
}

