//types

// let userName = "GEO";
// let hasLoggined = true;

// hasLoggined += "kettle";

// console.log(hasLoggined)

// above is a one of the problems you can have when you use javascript without type checking

//set a type when you declare a variable
//number, string, boolean, array, object, null, undefined
//nubmer
let myNumber: number = 10;
//string
let myRegex: RegExp = /dididida/;
let myString: string = "hello";

//array
//array which is filled with strings (you will get error if you put other type of data in below array)
const names: string[] = ["GEO", "lucason"];
const myValues: Array<number> = [1, 2, 3];


//object
const myPerson: { first: string, last: string } = {
    first: "GEO",
    last: "lucason",
    // middle : "Han" Type  Object literal may only specify known properties, and 'middle' does not exist in type '{ first: string; last: string; }'.
}

//hold on, should I write all those types whenever I write object? even tho It has all same properties?
// of course not
interface Person { 
    first: string;
    last: string;
}
// now you can manage the object and its properties

const someone: Person = {
    first: "random",
    last: 'stranger'
}

// someone. you type just like object. and vscode let you know all the properties and types

// you can not add property to object until you declare it with record type
// const ids = {
//     1: "GEO",
//     2: "random"
// }

// ids[3] = "kyun";


const ids : Record<number,string> = {
    1: "GEO",
    2: "random"
}   
//https://developer-talk.tistory.com/296 about record type
ids[3] = "kyun"; 

if(ids[3] ==='23'){
 
}

//you don't have to be this specific, TS would know it must be a number if it's a parameter of for loop, 
// so you don't have to declare type here
for(let i : number =0;i<10;i++){
  console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));

const out = [4,5,6].map((v) => v * 2);
// const out : number[] = [4,5,6].map((v) => `v * 2`);
                      