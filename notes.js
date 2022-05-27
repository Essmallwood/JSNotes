//console.log(x);

//var x = 100;

// this displays: undefined. 
//-------------------------------

// Attempt to use a variable before declaring it
//console.log(y);

// Variable assignment without var
// y = 150;

// displays: y is not defined. 
//-------------------------------
//Hoisting - a behavior of JavaScript in which 
// variable and functions declaration are moved to 
// the top of their scope.

// The code we wrote
console.log(x);
var x = 100;

// How JavaScript interpreted it
var x;
console.log(x);
x = 100;

//Displays: 100

//--------------------------------

//Convert Data Types in JavaScript

//let odyssey = 2001;
//console.log(typeof odyssey);

//Displays: number

//You can convert string to number
//You can convert number to string

// ----------------------------------------

var a ="First";
var b = "Second";
var c = "Third";



var d = "Fourth"; 
console.log(a+""+ b+ "" + c); 

//undefined = means it's declare but not assigned a value 
// you can define a variable without declaring it. 
// you can hoist a declaration but not initalization (give value)
//declare all variabes at the beginning of every scope ...
// 



//---------------------------------------
// object is a data type 
// everything except primitives are objects

// primitive value is a value that has no
// primitive value - 
// string
// number
// boolean
// null
// // undefined
// // symbol
// // bigint

// //The following example creates a new JavaScript object with four properties:
// //const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// // let name = "Daniel";
// // console.log(name.length); 

// var person = { 
//     firstName: "James", 
//     lastName: "Bond", 
//     age: 15
// };

// console.log(person);


// //Displays: 
// // Object 
// // age: 15; 
// // firstname: "James";
// // lastName: "Bond";
// // [{Protype}]: Object

// // The DOM (Document Object Model ) 
// //helps make the website interactive.
// // - it's an interface
// //-  allows a programming language to change
// // the content, structure, and style of website.
// //
// //

// /*
// Event are actions by the user or the browser.

// Event examples: pages finishes loading,
// user clicks a button, user hovers over a
// dropdown

// event handler - happens when an event fires.

// event listens - attaches to an element and waits/listens
// for the given event to fire. 


// JSON (JavaScript Object Notation) - data format
// - storing data
// - generating data structures from user input 
// - transferring data from servers to client, client o
// - confirguring and vertifying data


// */

// // JSON in js file
// var sammy = { 
//     "first_name"  :  "Sammy", 
//     "last_name"   :  "Shark", 
//     "online"      :  true 
//   }

//   console.log(sammy);

// /*


//  you may see JSON as a string rather than an object 

// */

// var ben = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}';

// console.log(ben);

// /*
// JSON data is normally acessed in JavaScript
// through do notation (:)
// */

// console.log(sammy.first_name);
// console.log(sammy.last_name);
// console.log(sammy.online);


// alert(sammy.first_name);

// var user_profile = { 
//     "username" : "SammyShark",
//     "social_media" : [
//       {
//         "description" : "twitter",
//         "link" : "https://twitter.com/digitalocean"
//       },
//       {
//         "description" : "facebook",
//         "link" : "https://www.facebook.com/DigitalOceanCloudHosting"
//       },
//       {
//         "description" : "github",
//         "link" : "https://github.com/digitalocean"
//       }
//     ]
//   }

//   alert(user_profile.social_media[1].description);

  /*
]The JSON.stringify() function
 converts an object to a JSON string.

  The JSON.stringify() function lets us convert objects to strings. To do the opposite, we’ll look at the JSON.parse() function.
 
 JSON-
 Data representation format 
 - commonly used for APIs and Configs

 JSON Syntax Rules
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays

 */


 /*

Protype-based language. 

- every object in JavaScript.

- has a hidden internal property called
[[Prototype]]

- prototype is a parent of object.

We can access the [[Prototype]] of an object using the Object.getPrototypeOf() method. Let’s use that
 to test the empty function we created.



 javascript class is a type of function/ 

 classes are declared with the class keywords. 
     
 [[Prototype]] of an object using the Object.getPrototypeOf() method.

 */

 // Initializing a function with a function expression
// const bread = function() {};

// Initializing a class with a class expression
// const cow = class {};

// Object.getPrototypeOf;

// const product = {
//   name: 'apple',
//   category: 'fruits',
//   price: 1.99
// }
  
// console.log(product);

/*
Objects are a collection of
 key-value pairs. 
The key IS ALWAYS A STRING & UNIQUE.
The valye can be primitive, an object, 
or a function. 

You can access a property(value) with 
the objectName.valueName; or
 objectName["valueName"];

*/


// console.log(product.name);
//"apple"

// console.log(product["name"]);
//"apple"

/*
an object can have an 
object or object(s) as 
values. 
*/

// const produce = {
//   name: 'apple',
//   category: 'fruits',
//   price: 1.99,
//   nutrients : {
//    carbs: 0.95,
//    fats: 0.3,
//    protein: 0.2
//  }
// }

// console.log(produce.nutrients.carbs);
//0.95

// we can create an object using just the name 
// of the variable. 


// const name = 'apple';
// const category = 'fruits';
// const price = 1.99;
// const newProduct = {
//   name,
//   category,
//   price
// }

// console.log(newProduct); 

// const cartPrototype = {
//   addProduct: function(product){
//     if(!this.products){
//      this.products = [product]
//     } else {

//       // the push method adds
//       // one or more element 
//       // to the end of an array
//       //and returns the new length
//       // of the array. 
//      this.products.push(product);

//      // so we are adding the product. 
//     }
//   },
//   getTotalPrice: function(){

//     // reduce () allows us to perform 
//     // calculations on each element
//     // in our array and return a single
//     // value at the end. 
//     return this.products.reduce((total, p) => total + p.price, 0);
//   }
// }

/*
use class keyword to create a class
add a method named constructor();
*/

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

/*
above we created a class 
called 'car'

it has a method called contructor();

// it also has two properties called
// "name" and "year"

// classes ARE NOT OBJECTS. 

// classes are templates for objects/\
// */

// let myCar1 = new Car("Ford", 2014);
// let myCar2 = new Car("Audi", 2019);

// // we created two car objects from our class. 

// class ClassName {
//   constructor() {  }
//   method_1() {  }
//   method_2() {  }
//   method_3() {  }
// }
// /*

// when you create a class, 
// always add a constructor () method
// and then we can add more methods to
// the class

// */
// class Car {

//   // contructor method
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   //age method 
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// let myCar = new Car("Ford", 2014);
// document.getElementById("demo").innerHTML =
// "My car is " + myCar.age() + " years old.";

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     alert(`${this.name} runs with speed ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     alert(`${this.name} stands still.`);
//   }
// }

// let animal = new Animal("My animal");


// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} hides!`);
//   }
// }

// let rabbit = new Rabbit("White Rabbit");

// console.log(rabbit.run(5)); // White Rabbit runs with speed 5.
// rabbit.hide(); // White Rabbit hides!


// /*

// Unpack?

// destructing assignment - unpack values 
// from array, or properties from objects
// into distinct variables. 

// There are two types of destructuring: Object destructuring and Array destructuring.

// */

// const note = {
//   id: 1,
//   title: 'My first note',
//   date: '01/01/1970',
// }


// // Destructure nested properties
// const {
//   id,
//   title,
//   date,
//   author: { firstName, lastName },
// } = note


// // SPREAD WITH ARRAYS
// // Create an Array
// const tools = ['hammer', 'screwdriver']
// const otherTools = ['wrench', 'saw']

// // Unpack the tools Array into the allTools Array
// const allTools = [...tools, ...otherTools]

// console.log(allTools)

/*
stroing a function in a 
variable called sum2. 


let sum2 = (a,b) => {
  return a + b
}


*/

// function timesTwo(params){  
//   return params * 2}


// arrow function or fat arrow 

 let timesTwo = (params) =>
params*7;


console.log(timesTwo(5)); 


// let hello = ()

//an anonymous function is a fuction 
// without a name. 

// you can use a anonymous function 
/*


you can use a anonymous function 
as an argument in other fuctions.

*/

console.log(this)

//strict mode??
/*

when using strict mode, the context
of this within 


mmethod a task that an object can perform




*/

let myFunction = () => console.log("hello CRUD world"); 

myFunction();


let coffeeShop = (coffeeAmount, price) =>
  console.log(price - coffeeAmount);

coffeeShop(1,5);

class Employee{
constructor(name){
  this.name=name; 
}
getEmployedName(){
  setTimeout(function (){
    console.log(this.name);
  }, 1000)
}
getEmployedNameArrow(){
  setTimeout(() => {
    console.log(this.name);
  }, 2000)
}

}

let firstEmployee = new Employee("Joe");
firstEmployee.getEmployedName();
// console.log("Hey");
firstEmployee.getEmployedNameArrow();

//.forEach()
/*

arrows do not have a protype property
*/

//asynchronous code = executed code immediately
// synchronous code - slower then asynchronous to excute

//setTimeout - sets a timer for a task to be done


//setTimeout is asynchronous. 
/*

setTimeout takes two arguments
- the function it's running
- the amount time you want it wait to call the function

- asynchronous code will be excuted after the synchronous 
top-level function




*/

/*

javascript can only excute one 
statement at a time.
event loop - when to excute
with specific statement. 
- it does it with a stack and queue.  

stack - Last In First Out. 
- only add or remove from the last in the stack.


- the queue is the waiting area.

when the call stack is empty, the event loop
checks queue for any waiting messages starting from oldest.


- once the event loop finds a messages in the
queue, it addes it to the stack. 


*/ 


//a function that takes a function is 
// called a higher-order function (aka callback function). 


// A function
function fn() {
  console.log('Just a function')
}

// A function that takes another function as an argument
function higherOrderFunction(callback) {
  // When you call a function that is passed as an argument, it is referred to as a callback
  callback()
  // console.log('Just a function 2')

}

// Passing a function
higherOrderFunction(fn)



// Define three functions

function first() {
  console.log(1)
}

function second(callback) {
  setTimeout(() => {
    console.log(2)

    // Execute the callback function
    callback()
  }, 0)
}

function third() {
  console.log(3)
}


// Example asynchronous function
function asynchronousRequest(args, callback) {
  // Throw an error if no arguments are passed
  if (!args) {
    return callback(new Error('Whoa! Something went wrong.'))
  } else {
    return setTimeout(
      // Just adding in a random number so it seems like the contrived asynchronous function
      // returned different data
      () => callback(null, {body: args + ' ' + Math.floor(Math.random() * 10)}),
      500,
    )
  }
}

// Nested asynchronous requests
function callbackHell() {
  asynchronousRequest('First', function first(error, response) {
    if (error) {
      console.log(error)
      return
    }
    console.log(response.body)
    asynchronousRequest('Second', function second(error, response) {
      if (error) {
        console.log(error)
        return
      }
      console.log(response.body)
      asynchronousRequest(null, function third(error, response) {
        if (error) {
          console.log(error)
          return
        }
        console.log(response.body)
      })
    })
  })
}

// Execute 
callbackHell()

// promise - an object that returns a value in the future.

// Initialize a promise
const promise = new Promise((resolve, reject) => {})

// Fetch a user from the GitHub API
fetch('https://api.github.com/users/octocat')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
  
