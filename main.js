var a,b,c,d,e,f,g,h,i,j;
function setValues()
{
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);

    c = Number(document.getElementById("c").value);
    d = Number(document.getElementById("d").value);

    e = Number(document.getElementById("e").value);
    f = Number(document.getElementById("f").value);

    g = Number(document.getElementById("g").value);
    h = Number(document.getElementById("h").value);

    i = Number(document.getElementById("i").value);
    j = Number(document.getElementById("j").value);
}
function sum()
{
    setValues();
    result = a+b;
    alert("The sum is equal to "+result);
    
    if (result > 5){
        alert("Too many projects to do");
    }
    if (result < 5){
        alert("Need more projects to do");
    }
    if (result == 5){
        alert("Perfect amount of work");
    }
}
function sum1()
{
    setValues();
    result = c+d;
    alert("The sum is equal to "+result);
   
    if (result > 5){
        alert("Too many projects to do");
    }
    if (result < 5){
        alert("Need more projects to do");
    }
    if (result == 5){
        alert("Perfect amount of work");
    }
}
function sum2()
{
    setValues();
    result = e+f;
    alert("The sum is equal to "+result);

    if (result > 5){
        alert("Too many projects to do");
    }
    if (result < 5){
        alert("Need more projects to do");
    }
    if (result == 5){
        alert("Perfect amount of work");
    }
}
function sum3()
{
    setValues();
    result = g+h;
    alert("The sum is equal to "+result);
    
    if (result > 5){
        alert("Too many projects to do");
    }
    if (result < 5){
        alert("Need more projects to do");
    }
    if (result == 5){
        alert("Perfect amount of work");
    }
}
function sum4()
{
    setValues();
    result = i+j;
    alert("The sum is equal to "+result);

    if (result > 5){
        alert("Too many projects to do");
    }
    if (result < 5){
        alert("Need more projects to do");
    }
    if (result == 5){
        alert("Perfect amount of work set");
    }
}

