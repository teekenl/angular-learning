var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
// var colorName:string = Color[2];
//var colorName:string = Color[Color.Green];
var colorName = Color.Green;
function tellEnum() {
    alert(colorName);
}
tellEnum();
