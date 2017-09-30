
function attr(name:string):string;
function attr(age:number):number;
function attr(get:boolean):boolean;

function attr(nameorage:any):any {
    if (nameorage && nameorage === "string") {
        alert("it is a string");
    } else{
        alert("it is a number");
    }
}

attr("hello");
attr(10);

