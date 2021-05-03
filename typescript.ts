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