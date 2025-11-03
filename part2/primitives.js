// Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance);
// console.log(anotherBalance.valueOf());

// console.log(typeof (balance));
// console.log(typeof (anotherBalance));


//  boolean
let isActive = true;
let isReallyActive = new Boolean(true);          // not recommended


// null and undefined

let firstName = null;                            // null means empty value
let lastName;                                    // undefined means value not assigned yet

// console.log(firstName);
// console.log(lastName);


// string

let myString = "hello";
let myStringOne = 'Hola';
let username = 'ayush'

let oldGreet = myString + " " + "hitesh";             // concatenation
console.log(oldGreet);


let greetMessage = `Hello ${username} !`;                     // string interpolation
console.log(greetMessage);
let demoOne = `Value is ${2*2}`;
console.log(demoOne);


// Symbol                                               (allways unique)

let sm1 = Symbol();
let sm2 = Symbol("aysuh");
let sm3 = Symbol("ayush");

console.log(sm1);
console.log(sm2 == sm3);                              // false because each symbol is unique even if description is same
