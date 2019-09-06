/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}
;

var sub = function (n1, n2) {
    return n1 - n2;
};

var cb = function (n1, n2, callback) {

    if (typeof callback !== "function" ||
            typeof n1 !== "number" ||
            typeof n2 !== "number")
        throw new Error("Wrong type");
    return "Result from the two numbers: " + n1 + " and " + n2 + " = " + callback(n1, n2);

};

var mul = function (n1, n2) {
    return n1 * n2;
};

console.log(add(1, 2));     // What will this print?
console.log(add);          // What will it print and what does add represent?
console.log(add(1, 2, 3)); // What will it print
console.log(add(1));      // What will it print     
console.log(cb(3, 3, add)); // What will it print
console.log(cb(4, 3, sub)); // What will it print

try {
    console.log(cb(3, 3, add()));// What will it print (and what was the problem)

} catch (err) {
    console.log(err.message);
}
try {
    console.log(cb(3, "hh", add));// What will it print

} catch (err) {
    console.log(err.message);
}

console.log(cb(5, 3, mul));
console.log(cb(5, 3, function (nm1, nm2) {
    return nm1 / nm2;
}));


