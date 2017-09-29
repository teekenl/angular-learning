
class People{
    name:string;
    age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
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

