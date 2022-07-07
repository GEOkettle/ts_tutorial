"use strict";
//first TS doesn't like module.export
// use export default
exports.__esModule = true;
exports.getName = exports.fetchData = exports.printAddUnion = exports.addUnion = exports.addStringsWithDefalutValue = exports.addStrings = void 0;
// function addNumbers(a, b) {
//     return a + b;
//     // Parameter 'a' implicitly has an 'any' type.
//     // Parameter 'b' implicitly has an 'any' type.
//     // any type error occurs because you didn't specify the type of the parameters
//     // you can specify the type of the parameters by adding the type annotation
//     // you can get actual error!!! yiah!!
// }
// then how to add type annotation in function?
function addNumbers(a, b) {
    // parameters type     return type
    return a + b;
}
exports["default"] = addNumbers;
//import addNumbers from "./functions";
// when you use addNumbers in other files, you just can import like this above
var addStrings = function (a, b) { return "".concat(a, " ").concat(b); };
exports.addStrings = addStrings;
//import {addStrings} from "./functions";
function addStringsWithDefalutValue(a, b) {
    if (b === void 0) { b = "님"; }
    return "".concat(a, " ").concat(b);
}
exports.addStringsWithDefalutValue = addStringsWithDefalutValue;
var addUnion = function (a, b) { return "".concat(a, " ").concat(b); };
exports.addUnion = addUnion;
// no return    
var printAddUnion = function (a, b) {
    console.log((0, exports.addUnion)(a, b));
};
exports.printAddUnion = printAddUnion;
var fetchData = function (url) {
    return Promise.resolve("data from ".concat(url));
};
exports.fetchData = fetchData;
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    //                                take any type of parameters and put them in an array
    return "".concat(salutation, " ").concat(names.join(" "));
}
//about Typescript
// when Types are enforced with typescript?
// during compiling, typescript will check the type of the parameters and return type
// not a runtime!
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.firstName) !== null && _a !== void 0 ? _a : 'pass some', " ").concat((_b = user === null || user === void 0 ? void 0 : user.lastName) !== null && _b !== void 0 ? _b : 'value');
    //  check if user is null or undefined                           default value
    // so if you just declare type and do nothing in the code, it occurs error when you run the code
    // so you need to adjust not only the type but also the value
    // look functions.js to check difference between before compile and after compile
}
exports.getName = getName;
