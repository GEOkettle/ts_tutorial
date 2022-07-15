//function

import addNumbers from "../02.functions";

function hello(name?: string) { 
    // clarify optional when decalre parameter type
    return `hillow, ${name || "WOrld"}`;
}

console.log(hello());
console.log(hello('GEO'));
// console.log(hello(1232));


//spread gonna make your all parameter into array so its type is array
function add(...nums:number[]) { 
    return nums.reduce((result,num)=> result + num,0)
}

console.log(add(1, 2, 3))

//this

interface User { 
    name: string;
}

const Sam: User = { name: 'Sam' }

function showName(this:User) { 
    console.log(this.name)
}


//https://www.youtube.com/watch?v=KfuyXQLFNW4 about bind
const a = showName.bind(Sam)
a();

//function overload

type Member= { 
    name: string;
    age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): Member;
//even tho you write parameter or return value more than one type
// you should specify what will comes out when what comes in
//How? write case above function like above
function join(name: string, age: string | number): Member | string{
    if (typeof age == "number") {
        return {
            name,
            age
        }
    } else { 
        return "나이는 숫자로 입력해주세요";
    }
}

const geo: Member = join("Geo", 29)
const kyun: string = join("Kyun", "28")

console.log(geo)
console.log(kyun)
