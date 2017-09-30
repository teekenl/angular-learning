/*
function Hello<T>(arg:T):T {
    return arg;
}

var output = Hello<string>("asd");
alert(output);
*/

/*
function Hello<T>(num:T[]):T[]{
    return num;
}

var arrayString = Hello<String>(["1","2","3"]);

console.log(arrayString.length);
*/

/*
function Hello<T>(arg:T):T {
    return arg;
}
var myVar:<K>(arg:K)=>K = Hello;
*/
/*
interface Hello<T>{
    (arg:T):T;
}

function myHello<T>(arg:T):T{
    return arg;
}

var mh:Hello<number> = myHello;
alert(mh(100));
*/

class HelloNumber<T> {
    zero:T;
    add:(x:T,y:T)=>T;
}

var myHelloNumber = new HelloNumber<number>();
myHelloNumber.zero = 10;
myHelloNumber.add = function(x,y) {
    return x + y;
};

