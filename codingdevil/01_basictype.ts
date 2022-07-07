"use strict";


//string
//https://joshua1988.github.io/ts/guide/type-alias.html
let car: string = "hummer";
car = 'rubicon'
// 선언한 타입이 아닌 다른타입을 넣으면 error
// car = 12


//number
let age: number = 29
//boolean
let isadult: boolean = true
//array
let a: number[] = [1, 2, 3]
let a2: Array<number> = [1, 2, 3]

let week: string[] = ['sun', 'mon', 'tues']
let week2: Array<string> = ['sun', 'mon', 'tues',]

//tuple
//fixed length and type
let tuple: [string, number] = ['hillow', 29]
//  tuple = [234, 'hello']
tuple = ['WOrld', 29]

tuple[0] = tuple[0].toLowerCase();
// tuple[1].toLowerCase();
console.log(tuple[0]);

//void,never
function sayHello() : void { 
    console.log('hillow');
    //I'm just saying hello not return anything
    //then your function type is void
    
} 
//일단 네버는 에러핸들링이랑 끝나지않는 루프에쓴다 이렇게만 알아두자
function showError(message: string): never {
    throw new Error(message);
}

function infLoop(): never {
    while(true) {

    }
}

//enum
//for constant 
enum Os { 
    Window,
    Ios,
    Android
}
//when enum value is number, enum can map both side
enum hobbies { 
    music = 4,
    boxing,
    movie,

}
console.log(hobbies[4]);
console.log(hobbies['music']);

//when enum value is string, enum can map only string
enum We {
    son = 'jiwon',
    kim = 'dongkyun',
    jake = 'park'
}

console.log(We.son);
console.log(We['son']);
// console.log(We.['jiwon']);

let hobby: hobbies;

// hobby = hobbies.thaiboxing; 
hobby = hobbies.boxing; 
console.log(hobby);


//null, undefined

let nully: null = null;
let undef: undefined = undefined;

//https://medium.com/the-clever-dev/the-difference-between-a-tuple-and-an-array-in-typescript-e9fe9cc4a862