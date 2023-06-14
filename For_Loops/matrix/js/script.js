function exemple()
{
    var star ="";
    var i= 0;
    var j= 0;
    for ( i=0; i<10 ; i++)
    {
        for ( j=0; j< 10; j++)
        {
            star += "*";
        }
        star +="\n"
    }
    document.getElementById("output").innerText = star ;
    
}

function multiplication()
{
    var i =0;
    var j=0;
    var avrage =0;

    for ( i =0; i< 10; i++)
    {
        for ( j= 0; j< 10; j++)
        {
            avrage +=" " + i*j + " "; 
        }
    }
    document.getElementById("output1").innerText = avrage;
}

