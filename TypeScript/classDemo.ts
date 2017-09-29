
class Person{
    private name:string;
    private age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    getAge():number {
        return this.age;
    }

    getName():string{
        return this.name;
    }

    print():string{
        return this.name + ": " + this.age;
    }
}

var p = new Person("kenlau5",12);
console.log(p.print());
