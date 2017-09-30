
/*
function printLabel(labelObj:{label:string}){
    console.log(labelObj.label);
}

var myObj = {label:"Hello"};

printLabel(myObj);*/

interface LabelValue {
    label:string
}

function printLabel(labelObj:LabelValue) {
    console.log(labelObj.label);
}


var myObj = {label:"Hello"};
printLabel(myObj);


