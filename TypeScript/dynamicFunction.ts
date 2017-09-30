

function peopleName(firstname:string,...restOfName:string[]) {
    return firstname + " " + restOfName.join(" ");
}

var name_1 = peopleName("ken","lau","tee");

console.log(name_1);


