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
} else if (secoundAge < 18) {
  console.log("you are to young");
}

if (secoundAge > firstAge) {
  console.log("you can take moto");
} else {
  console.log("you remain with bike");
}

// minim between 2 numbers
console.log("find the minimul between 2 numbers");
var num1 = 10;
var num2 = 12;
console.log("num1 is:", (num1 = 10));
console.log("num2 is:", (num2 = 12));
if (num1 > num2) {
  console.log("num1 it is highter then num2");
} else {
  console.log("num1 it is lover then num2");
}
if (num1 == num2) {
  console.log("num1 it is equal with num2");
}

// checking input using if

function validateForm() {
  var num1 = document.getElementById("num1").value;
  if (num1 > 10 && num1 < 100) {
    alert("good input");
  } else alert("error !introduce between 10-100");
}

// exercises with if_else
console.log("Write a program that picks 2 numbers and alerts which is bigger");

function validateForm1() {
  var num1 = document.getElementById("num11").value;
  var num2 = document.getElementById("num22").value;
  alert("num1 is: " + num1);
  alert("num2 is: " + num2);
  if (num1 > num2) {
    alert("num1 it is higher then num2");
  } else if (num1 < num2) {
    alert("num1 it is lower then num2");
  } else alert("it is equal");
}

// Write a program that will receive input from
// the user and let you know if the number is
// divisible by 2.

function validateForm1() {
  var first = document.getElementById("num11").value;
  console.log(first);

  if (first > 0) {
    var result = first % 2;
    alert(result);
  }
}

function validateForm() {
  var lucky = document.getElementById("num1").value;
  if (lucky == 7) {
    alert("you win 1,000,000$");
  } else {
    alert("try again");
  }
}
function disko() {
  var n = Math.random() * 100;
  n = Math.floor(n);
  document.getElementById("num10").innerText = n;
  if (n > 0 && n < 30) {
    document.body.style.backgroundColor = "white";
  }
  if (n >= 30 && n < 60) {
    document.body.style.backgroundColor = "aqua";
  }
  if (n >= 60) {
    document.body.style.backgroundColor = "gray";
  }
}

// exercises
// Create an html page named index.html
// a. Add a button with the caption click me
// b. Add a paragraph with id = "details”
// c. Write a script that receives the user's lucky number from the prompt.
// d. If the lucky number is 777 the user will see "1,000,000$” display with a blue color with a yellow
// background, with a 1px solid green border. else display your name with a yellow color with a black
// background, with a 5px solid red border
// e. Clicking the button will activate the function

function caption() {
  const name = "teodor";
  var rece = Math.random() * 1000;
  rece = Math.floor(rece);
  document.getElementById("details").innerText = rece;
  const butonulMeu = document.getElementById("butonulMeu").innerText;

  if (rece == 777) {
    alert("win 1000000$");
    document.getElementById("butonulMeu").style.backgroundColor = "green";
    document.getElementById("butonulMeu").style.color = "blue";
    document.getElementById("butonulMeu").style.border = "1px solid green";
  } else {
    alert(name);
    document.getElementById("butonulMeu").style.color = "green";
    document.getElementById("butonulMeu").style.backgroundColor = "black";
    document.getElementById("butonulMeu").style.border = "5px solid red";
  }
}

// Create an html page named index.html
// a. Add a button with the caption click me
// b. Add button with reset caption
// c. Add a paragraph with id = "details”
// d. Add a function called reset The function will initialize the div width to be 10px with a yellow
// background
// e. Add a function called enlarge The function will increase the div background by 10px
// f. If document.getElementById("details").style.width is more than 500px then the
// background color of the page will be brown else blue

function reset() {
  const reset = document.getElementById("reset").innerText;
  const par = document.getElementById("details_paragraph");

  if (reset) {
    document.getElementById("details_paragraph").style.width = "10px";
    document.getElementById("details_paragraph").style.backgroundColor =
      "yellow";
    document.getElementById("details_paragraph").style.marginInline = "auto";
  }
}


let par = document.getElementById("details_paragraph");
let value1 = 10;
function enlarge() {

  value1 = value1 + 100;
  par.style.width = `${value1}px`;
}


// Add a button with the caption click me
// a. Add a button with the caption click me
// b. Add a paragraph with id = "details”
// c. Write a script that receives 2 numbers from the prompt.
// d. If the Sum of numbers bigger than 100 show the sum of numbers on paragraph with id =
// "details” with blue color else show the sum of numbers on paragraph with id = "details” with red
// color
// e. Call the functions by pressing a button.

function clickme()
{
    const firstNumber = Number(prompt("enter the first number"));
    const SecoundNumber = Number(prompt("enter the secound number"));

    const sum12 = firstNumber + SecoundNumber;

    const detailsParagraph = document.getElementById("details12");

    if( sum12 > 100)
    {
        detailsParagraph.style.color = "blue";
    }else{
        detailsParagraph.style.color = "red";
    }

 
}


// Add a button with the caption click me
// a. Add a button with the caption click me
// b. Add <img src=”” id=”a1”>,<img src=”i2”>,<img src=”” id=”a1”>, <img src=”” id=”a3”>
// c. Write a script that receives a number from the prompt.
// d. If the number less than 100 show all images
// e. else if the number equals to 100 show first and second picture
// f. else if the number bigger than 100 show only first picture
// g. Call the functions by pressing a button.

function caption1(){

    var firstNumber = Number(prompt("enter the first number"));

    if(firstNumber < 100)
    {
        showAllImages();
    } else if ( firstNumber === 100)
    {
        showSecondImage();
    } 
    else 
    {
        showFirstImage();
    }

    
}
function showAllImages() {
    document.getElementById("a1").style.display = "inline";
    document.getElementById("a2").style.display = "inline";
    document.getElementById("a3").style.display = "inline";
  }
  
  function showSecondImage() {
    document.getElementById("a1").style.display = "none";
    document.getElementById("a2").style.display = "inline";
    document.getElementById("a3").style.display = "none";
  }
  
  function showFirstImage() {
    document.getElementById("a1").style.display = "inline";
    document.getElementById("a2").style.display = "none";
    document.getElementById("a3").style.display = "none";
  }
  