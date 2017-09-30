

interface Shape{
    color:string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape , PenStroke{
    sideLength:number;
}

interface Counter {
    interval:number;
    reset():void;
    (start:number):string;
}


function printSquare(object:Square) {
    return object.sideLength;
}

var s = <Square>{}; //  s:Square

s.penWidth = 10;
s.color = "Red";
s.sideLength =10;
printSquare(s);



var c:Counter;
c(10);
c.reset();
