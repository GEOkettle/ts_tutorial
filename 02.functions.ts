//function

//first TS doesn't like module.export
// use export default

// function addNumbers(a, b) {
//     return a + b;
//     // Parameter 'a' implicitly has an 'any' type.
//     // Parameter 'b' implicitly has an 'any' type.
//     // any type error occurs because you didn't specify the type of the parameters
//     // you can specify the type of the parameters by adding the type annotation
//     // you can get actual error!!! yiah!!
// }

// then how to add type annotation in function?

function addNumbers(a: number, b: number): number {
                    // parameters type     return type
    return a + b;
}


export default addNumbers;
//import addNumbers from "./functions";
// when you use addNumbers in other files, you just can import like this above


export const addStrings=(a: string, b: string): string => `${a} ${b}`;

//import {addStrings} from "./functions";

export function addStringsWithDefalutValue(a: string, b: string = "님"): string { 
    return `${a} ${b}`;
}

export const addUnion = (a: number, b: number | string): string => `${a} ${b}`;

// no return    
export const printAddUnion = (a: number, b: number | string): void => {
    console.log(addUnion(a, b));
}

export const fetchData = (url: string): Promise<string> => 
    Promise.resolve(`data from ${url}`)
 

function introduce(salutation: string, ...names: string[]): string { 
    //                                take any type of parameters and put them in an array
    return `${salutation} ${names.join(" ")}`;
}
//about Typescript

// when Types are enforced with typescript?
// during compiling, typescript will check the type of the parameters and return type
// not a runtime!

export function getName(user: {firstName: string, lastName: string}): string {
    return `${user?.firstName ?? 'pass some'} ${user?.lastName  ?? 'value'}`;
    //  check if user is null or undefined                           default value
    
    // so if you just declare type and do nothing in the code, it occurs error when you run the code
    // so you need to adjust not only the type but also the value
    // for example on the line above, you get the undefined error if you dont check user like user?.firstName
    // so you need to check if user is null or undefined
    // if user is null or undefined, you can use ?? operator to set default value


    // look functions.js to check difference between before compile and after compile
}