//boolean
var isCool = true;
//number
var age = 56;
//string
var eyeColor = 'brown';
var favouriteQuote = "im not old im only  " + age;
//array
var pets = ['cat', 'dog', 'pig'];
// let pets2 = Array<string> = ['lion', 'dragon', 'lizard']; probably deprecated
//object
var wizard = {
    a: 'John'
};
//null and undefined
var meh = undefined;
var noo = null;
//tuple
//basket expecting this specific type and order
var basket;
basket = ['basketball', 5];
//enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
//Any dont use everytime because all benefits of typescript will be removed
var whatever = 'afsdfsadfsadf';
//can be any type and will not create error
whatever = true;
//void
var sing = function () {
    console.log('lalalalal');
};
//with return
var sing2 = function () {
    console.log('lalalalal');
    return 'lalalal';
};
//never function doesnt return and doesnt have end point
var error = function () {
    throw Error('opps');
};
//this better code style
var fightRobotArmy = function (robots) {
    console.log('test');
};
var fightRobotArmy2 = function (robots) {
    console.log('test');
};
fightRobotArmy({ count: 1, type: 'dragon' });
var fightRobotArmy3 = function (robots) {
    console.log('test');
};
var fightRobotArmy4 = function (robots) {
    console.log('test');
    return 5;
};
//classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalalalalla';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('Raaar');
console.log(lion.greet());
//union = or first or second type
var confused = "hello";
var x = 4;
// x = 'hello'
