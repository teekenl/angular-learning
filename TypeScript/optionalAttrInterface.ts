
interface USB {
    name?:string;
    age?:number;
}

function printUSB(pu:USB){
    console.log(pu.name);
    if(pu.age !== null) {
        console.log(pu.age);
    }

}

var myUSB = {name:"ken"};
printUSB(myUSB);

