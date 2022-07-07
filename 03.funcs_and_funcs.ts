//callback function
export function printTofile(text: string, callback: () => void): void{
    //                         callback function name    return type
    console.log(text)
    callback()
}

export type MutationFunction = (v:number) => number

export function arrayMutate(numbers: number[], mutate: MutationFunction): number[] { 
    return numbers.map(mutate)
}
//take array with number as first parameter and callback function as second
// and return array with numbers mutated by callback function
// map means for each element in array call callback function and return new array 

console.log(arrayMutate([1, 2, 3], (v) => v * 2))

export type adderFunction = (val :number)=> number

export function createAdder(num: number): adderFunction { 
    return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(41)) 
// frankly speaking, I don't understand how this works
// need to learn capsulation and closures first