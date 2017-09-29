
class Person {
    name:string;
    age:number;
    constructor(name,age){
        this.name = name;
        this.age = age;

    }
    print(){
        return this.name + ": " + this.age;
    }
}


class Students extends Person {
    school: string;

    constructor(name: string, age: number, school: string) {
        super(name, age);
        this.school = school;
    }

    tellSchool() {
        return this.name + ":" + this.age + ": " + this.school;
    }
}
