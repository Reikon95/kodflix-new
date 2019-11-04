let arr = [1, "cat", "dog", 2, false];
let newArr = arr.filter(function(elem) {return (typeof elem === "string")}).map(function(elem) {return elem + ' is a nice pet'});
console.log(newArr)