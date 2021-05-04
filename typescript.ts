//boolean
let isCool: boolean = true

//number
let age: number = 56;

//string
let eyeColor: string = 'brown';
let favouriteQuote: string = "im not old im only  " + age;

//array
let pets: string[] = ['cat', 'dog', 'pig'];
// let pets2 = Array<string> = ['lion', 'dragon', 'lizard']; probably deprecated

//object
let wizard: object = {
    a: 'John'
}

//null and undefined
let meh: undefined = undefined
let noo: null = null

//tuple
//basket expecting this specific type and order
let basket: [string, number];
basket = ['basketball', 5]

//enum
enum Size {
    Small = 1,
    Medium = 2,
    Large = 3
}

let sizeName: number = Size.Small;

//Any dont use everytime because all benefits of typescript will be removed
let whatever: any = 'afsdfsadfsadf';
//can be any type and will not create error
whatever = true

//void
let sing = (): void => {
    console.log('lalalalal')
}

//with return
let sing2 = (): string => {
    console.log('lalalalal')
    return 'lalalal';
}

//never function doesnt return and doesnt have end point
let error = () => {
    throw Error('opps')
}

//interface
interface RobotArmy {
    count: number,
    type: string,
    magic?: string //optional
}

//this better code style
let fightRobotArmy = (robots: RobotArmy) => {
    console.log('test')
}
let fightRobotArmy2 = (robots: { count: string, type: string, magic: string }) => {
    console.log('test')
}

fightRobotArmy({ count: 1, type: 'dragon'})
