// let user: object;


// user = {
//     name: 'GEO',
//     age: 29
// }

// console.log(user.name)
//아니씨발이게왜안돼
//아 object라는 타입에는 name이란 프로퍼티가없지
//https://developer-talk.tistory.com/192
//ts에서의 object 
let obj: object = { name: 'GEO', age: 29 }
obj = { a: 1, b: "fsda" }
// obj.a
// obj.b
//이렇게는 되는데 이렇게 지조때로 할꺼면 ts 쓰는 이유가 뭔데


//interface
type Score = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
interface User { 
    name: string;
    age: number;
    sexuality?: string;//optional
    readonly identity: string; // readonly
    [grade: number]: Score; //indexer if property name is number type then value should be Score
   

}

let user: User;
user = {
    name: "GEO",
    age: 29,
    identity: "vegabond",
    10: 'F',
    20 : 'F',
}

console.log(user.name)
console.log(user.age)

console.log(user.sexuality);//undefined
user.sexuality = 'hetrosexual';
console.log(user.sexuality);//undefined

console.log(user.identity);
// user.identity = "gentleman"; can't do this because readonly

// fucntion with interface
interface nihilism { 
    (matter :string, energy: number): void;
}

const Nietzsche : nihilism = function (a, b) {
    console.log(a, b);
    
}

interface utilitarianism { 
    (majoropinion: number): boolean;
}

const johnStuart: utilitarianism = (c) => { 
    let minoropinion = c - 1;
    return c > minoropinion;
}

console.log(Nietzsche('life', 100));
console.log(johnStuart(10));


//class with interface
//클래스가 헛갈린다면 https://ko.javascript.info/class
interface Car { 
    color: string;
    wheels: number;
    start(): void;
}

class Bmw implements Car { 
    color;
    wheels = 4;
    constructor(c: string) { 
        this.color = c;
    }
    start() { 
        console.log('start');}    
}
    
const bmwmodel1 = new Bmw('red');
console.log(bmwmodel1)
console.log(bmwmodel1.color);
console.log(bmwmodel1.wheels);
bmwmodel1.start();

//interface extend

interface Truck extends Car { 
    jump(): void;


}

class MonsterTruck implements Truck { 
    color;
    wheels = 6;
    constructor(c: string) { 
        this.color = c;
    }
    start() { 
        console.log('truck go')
    }
    jump() { 
        console.log('jump!')
    }
}

const mtruckmodel1 = new MonsterTruck('yellowgreen');

console.log(mtruckmodel1.color);
console.log(mtruckmodel1.wheels);
mtruckmodel1.start();
mtruckmodel1.jump(); 

//complex extends

interface Toy { 
    productCode: string;
}

interface toyCar extends Car, Toy { 
    price: string;
}

class boongBoong implements toyCar { 
    color = 'blue';
    wheels = 4;
    price = '10000원';
    productCode;
    constructor(pc: string) { 
        this.productCode = pc;
    }
    start() { 
        console.log('best christmas gift ever');
    }
}

const boongBoong2 = new boongBoong('a123');

console.log(boongBoong2)
console.log(boongBoong2.color)
console.log(boongBoong2.price)
console.log(boongBoong2.productCode)
console.log(boongBoong2.wheels)
boongBoong2.start()