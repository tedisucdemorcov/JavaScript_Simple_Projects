// here we have input exercises with inputs and sum

function sum()
{
    var number = document.getElementById("input1").value;
    alert(number);
}

// input exercises with id from html

function sum1()
{
    var number1 = document.getElementById("first").value;
    var number2 = document.getElementById("secound").value;
    var number3 = parseInt(number1) + parseInt(number2);
    alert(number3);
}
// exercises with inputs using promt

function sum2()
{
    var num1 = prompt("print the first number");
    var num2 = prompt("print the secound number");
    var num3 = prompt("print the third number");
    var sum = parseInt(num1) + parseInt(num2) + parseInt(num3);
    alert(sum);
}
