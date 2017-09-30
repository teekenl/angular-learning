
var jsxModul = function(vip) {
    var YVip = document.getElementById(vip);

    return{
        add: function(t){
            if(t>=12) {
                YVip.innerHTML = "annual fee" + t;
            } else{
                YVip.innerHTML = "monthly fee" + t;
            }
        }
    }
};

var js = jsxModul("vip");
js.add(10);

