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



//                   Memory
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive)(copy milti h isme), 
// Heap(non-primitive)(reference milta h isme)

let myYoutubename = "Anshsinghdotcom"
let anothername = myYoutubename
anothername="official_personality111"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ansh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

