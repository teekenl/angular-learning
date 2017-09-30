
var people =  {
    name: ["ken","lau","tee", "95"],
    getname: function() {
        return function() {
            var i = Math.floor(Math.random() * 2);
            return {
                n: this.name[i]
            }
        }
    }
};

// you can bind function or lambda expression () = >
var getRandomName = people.getname().bind(people);
alert(getRandomName().n);
