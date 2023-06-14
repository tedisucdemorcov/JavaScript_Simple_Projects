function print0to10() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}

function print10to0() {
  var i = 0;
  for (i = 10; i >= 0; i--) {
    console.log(i);
  }
}

function printEvent() {
  var i = 0;
  for (i = 0; i < 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

function B20()
{
    var counter =0;
    for( var i=0;i<4;i++)
    {
        var n = prompt("print num");
        n = parseInt(n);
        if( n >20)
        {
            counter++;
        }
    }
    document.getElementById("count").innerText = counter;
}

function countEven()
{
    var count = 0;
    var i =0;
    for(i=0; i<4;i++)
    {
        var numbers = parseInt(prompt("Enter number " + i));
        if(numbers % 2 === 0)
        {
            count++;
        }
    }
    document.getElementById("details").innerText = "Number of even numbers " + count;
}

function sum()
{
    var sum =0;
    var i;
    for ( i =0; i<10; i++)
    {
        sum += i;
    }
    document.getElementById("sum").innerText = sum;
}

function sumA()
{
    var numbers = [];
    var i =0;
    var sum =0;
    for ( i=0; i<5; i++)
    {
        var input = parseInt(prompt("Enter number: " + (i + 1 )));
        numbers.push(input);
        sum += input;
    }
    document.getElementById("sum1").innerHTML = " the sumn of the numbers " + sum;
}


  