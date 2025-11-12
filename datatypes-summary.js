// primitive 

// 7 type: String,Number,Boolean, null,,undefined,Symbol,Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 789654874548985n




// Reference (non primitive)

//Array,Objects,Functions


const heros = ["shaktiman","naagraj","doga"]
let myObj ={ name:"Ansh", age:20,}

const myFunction =function()
{
    console.log("Hello World");

}

console.log(typeof outsideTemp);
console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof anotherId);

//undefined ="undefined"
//Null = "object"
//Boolean = "boolean"
//Number ="number"
//String = "string"
//outsideTemp ="object"
//bigNumber = "bigint"
//scoreValue ="number"
//myFunction = "function"
//anotherId = "symbol"

