var mySearch;
mySearch = function (source, substring) {
    return source.search(substring) != -1;
};
console.log(mySearch("asd", "s"));
