/*
function add(x,y) {
    return x+y;
}

var myAdd = function (x,y) {
    return x+y;
};*/

function add(x:number,y:number):string {
    return "hello typescript";
}

var myAdd = function(x:number, y:string):string {
    return "hello ts";
};

var myAddts:(name:string, age:number)=> number = function(n:string, a:number):number {
    return a;
};



