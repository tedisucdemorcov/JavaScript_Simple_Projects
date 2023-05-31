// if else statement

var number = 5;
if (number > 4.99) {
  alert("Not bad, you passed");
} else {
  alert("man... see you later!");
}

// simple practice
console.log("simple exercises");
var firstAge = 20;
var secoundAge = 30;
var name = "jhon";

if (firstAge > 18) {
  console.log("You are old enoght for this job");
} else if(secoundAge < 18) {
    console.log("you are to young");
}

if(secoundAge > firstAge)
{
    console.log("you can take moto")
}else 
{
    console.log("you remain with bike");
}

// minim between 2 numbers
console.log("find the minimul between 2 numbers");
var num1 = 10;
var num2 = 12;
console.log("num1 is:",num1 = 10);
console.log("num2 is:",num2 = 12);
if(num1 > num2 ){
    console.log("num1 it is highter then num2");
} else  {
    console.log("num1 it is lover then num2");
}  if( num1 == num2){
    console.log("num1 it is equal with num2");
}

// checking input using if

function validateForm()
{
    var num1 = document.getElementById("num1").value;
    if (num1 > 10 && num1 < 100)
    {
        alert("good input");
    }else
    
        alert("error !introduce between 10-100");
    
}

// exercises with if_else
console.log("Write a program that picks 2 numbers and alerts which is bigger");

function validateForm1()
{
    var num1 = document.getElementById("num11").value;
    var num2 = document.getElementById("num22").value;
    alert("num1 is: "+ num1);
    alert("num2 is: "+ num2);
    if ( num1 > num2){
        alert("num1 it is higher then num2");
    }else if( num1 < num2){
        alert("num1 it is lower then num2");
    } else
    alert("it is equal")
}