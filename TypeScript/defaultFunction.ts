
/* using ?  to determine the variable is empty or not.
function buildName(firstname?:string, lastname?:string) {
    if(lastname) {
        return firstname + " " +lastname;
    } else {
        return firstname;
    }
}

var name_1 = buildName("ken", "lau");
var name_2 = buildName("kenl");
*/

function buildName(firstname:string, lastname:string="lau") {
    return firstname + " " + lastname;
}

var name_1 = buildName("ken");

console.log(name_1);
