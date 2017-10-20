var func1 = function () {

};
console.log(func1.name);
console.log((new Function).name);
console.log((func1.bind({})).name);