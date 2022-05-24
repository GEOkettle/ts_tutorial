//implementation
interface Coordinate {
    x: number;
    y: number;
}

function parseCoordinateWithObj(obj: Coordinate): Coordinate { 
    return {
        ...obj,
    }
}

function parseCoordinateWithNum(x: number, y: number): Coordinate { 

    return {
        // x:x,
        // y:y
        //or
        x,
        y
    }
}
console.log(parseCoordinateWithNum(1, 2))

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate { 
//                                    make argument2 optional
//what is a unknown?
//https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html
// like type 'any' it recieve any type but it doesn't do any calculations
// and let you know type is right or wrong in complie time
// so you can see what type will come and how to deal with it with conditional statements in development phase
    let coord: Coordinate={
        x: 0,
        y: 0
    };
    
    if (typeof arg1 === 'object') {
        // if argument1 is object(Coordinate actually but you do this if statement in runtime enviorment)
        // it means Coordinate type is passed so you can just asign it to return value
        coord = {
            ...(arg1 as Coordinate)
        }
        
    } else if (typeof arg1 === 'string') { 
        (arg1 as string).split(',').forEach(str => { 
            const [key, value] = str.split(':');
            coord[key as  'x' | 'y' ] = parseInt(value,10)
        })

    } else { 
        //when two number parameter comes
        coord = {
            x:  (arg1 as number),
            y: (arg2 as number)
            
        }
    }
  return coord
}

console.log(parseCoordinate({x: 2124, y: 42}))
console.log(parseCoordinate(321,42))
console.log(parseCoordinate('x: 44213,y: 42'))