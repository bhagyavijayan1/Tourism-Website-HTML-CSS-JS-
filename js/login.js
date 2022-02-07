var email = document.querySelector("#defaultLoginFormEmail");
var pwd = document.querySelector("#defaultLoginFormPassword");

var error1=document.querySelector("#error1");
var error2=document.querySelector("#error2");

let expr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function valid()
{
    return (verifyemail()&&paswd());
}



function verifyemail()
{
    if(expr.test(email.value)){
        email.style.border="2px solid green";
        return true;
    }
    else{
        error1.innerHTML="please enter a valid email address";
        email.style.border="2px solid red";
        error1.style.color="red";
        error1.style.fontSize="smaller";
        return false;
    }   
}

function paswd()
{
    if(pwd.value.length<8)
    {
    error2.innerHTML="Wrong password. Try again or click Forgot password to reset it.";
    error2.style.color="red";
    error2.style.fontSize="x-small";
    return false;
    }
    else{
        return true;
    }
}