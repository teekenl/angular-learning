
interface SearchFunc{
    (source:string,substring:string):boolean;
}

var mySearch:SearchFunc;
mySearch = function(source:string, substring:string) {
    return source.search(substring) != -1;
};

console.log(mySearch("asd","s"));

