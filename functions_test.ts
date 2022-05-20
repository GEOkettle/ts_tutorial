import addNumbers,{getName,addStrings,addStringsWithDefalutValue,addUnion,printAddUnion,fetchData} from "./functions";
// import addStrings from "./functions"; this is not working, because it just import the default function and rename it


console.log(addNumbers(1, 2));
// console.log(addNumbers(1, "2"));
// Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(addStrings("Hillow", "WOrld"));

console.log(addStringsWithDefalutValue("GEO"));

console.log(addUnion(1, 2));

printAddUnion(1, 2);

// fetchData("https://www.google.com").then(data => console.log(data));

console.log(getName({ firstName :'GEO', lastName : 'kettle'}));