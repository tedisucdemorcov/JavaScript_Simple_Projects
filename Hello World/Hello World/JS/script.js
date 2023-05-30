// alert!

alert("hello world");
alert(" alert it is special concept for adding some information before the page will load");
alert("after alerts ends you can see the page.");
// console log 
console.log("consol.log() it is a method that provide permison to add some messages.");
console.log("we will not see in the page but we can acces in inspect page -> console in browser");

// Practice

// 1.) Write a program that shows your name on the console.
// 2.) Write a program that shows your address on the console.
// 3.) Write a program that shows your name on alert.
// 4.) Write a program that shows your address on alert.

console.log("Teodor Cristian");
console.log("i live in Brasov");
console.log(alert("Teodor"));
alert("Brasov");


// document.getElementById

console.log("document.hetElementById retruns an element with specific value.");
console.log( "we must specify in HTML id of an element.");

// document.getElementById("container_id").style.color="red";
// later we will add this command here

// variables
console.log("we will use variables with var then let!");
// var zone
var salary;
var x = 10;
var y = 20;
var name = 'Jon';
// let zone

let x1 = 5;
let y1 = 10;
let z = x+y;
console.log(z, "we will do sum betwen x and y from above ");

// first
var a = 5;
var b = "4";
var ab = a + b;
console.log(ab);
// secound
var a1 = 5;
var b1 = parseInt("4");
var s1 = a1 + b1;
console.log(s1);

// concatenate Strings

var age1 = 8;
var sentence = "I am " + age1 + " years old";
console.log("the text will be something like:","I am 8 yeas old");

// lets do some practice

// 1. Create a numeric variable named “age” with the value 11;
// 2. Increase the value of “age” by 1 (use shortcuts).
// 3. Create a string variable named “name” with your name;
// 4. Print the type of the variable “name”.
// 5. Multiply the value of “age” by 2 (use shortcuts). Then print the value.
// 6. Divide the value of “age” by 3. Then print the value.

var age2 = 11;
age2++;
const name1 = "teodor";
console.log(name1);
age2*=2;
console.log(age2);
age2/=3;
console.log(age2);
