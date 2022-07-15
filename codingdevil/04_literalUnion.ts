// Literal Types

// 문자열이 아닌 "Hello World"로 타입을 정함
const helloWorld = "Hello World";

// 문자열이라고 선언 함
let hiWorld = "Hi World";

//put on mouse over on variable
const userName1 = "GEO"; //  immutable
let userName2 = "kyun"; //mutable



type Job = "solider" | "developer" | "boxer" | "writer";

interface citizen { 
    name: string;
    job: Job;
}



const person1:citizen={
    name: "Geo",
    job : "developer"
}

console.log(person1)

interface YoungDumbBrokeHighSchoolKid { 
    name: string;
    grade: 1 | 2 | 3;// | is basically || in JS and it's called UnionType 
}


//Union Types (or)

interface Vehicle { 
    name: "vehicle";//type and value both are "vehicle"
    color: string;
    start(): void;
}
interface Mobile {
    name: "mobile"; //type and value both are "mobile"
    color: string;
    call(): void;
} 
// 이 vehicle을 가져다쓰는 object의 타입이 object이아니라 vehicle이듯이 name property의 타입은 string이 아니라 vehicle

function getGift(gift: Vehicle | Mobile){ 
    console.log(gift.color)
    if (gift.name === "vehicle") {
        gift.start();
    } else if (gift.name === "mobile") { 
        gift.call()
    }
}


//InterSection Types (and)

interface Grass { 
    name: string;
    start(): void;
}

interface LSD { 
    name: string;
    color: string;
    price: number;
}

const HIgh: Grass & LSD = {
    name: "snoop dogg",
    start() { console.log("dre is ma son") },
    color: "greeny",
    price : 8
    
}