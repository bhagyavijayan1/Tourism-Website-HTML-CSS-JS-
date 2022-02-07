var fname = document.querySelector("#defaultRegisterFormFirstName");
var lname = document.querySelector("#defaultRegisterFormLastName");
var email = document.querySelector("#defaultRegisterFormEmail");
var pwd = document.querySelector("#defaultRegisterFormPassword");
var pwd1 = document.querySelector("#cnfmpswd");
var ph = document.querySelector("#defaultRegisterPhonePassword");


var error1=document.querySelector("#error1");
var error2=document.querySelector("#error2");
var error3=document.querySelector("#error3");
var error4=document.querySelector("#error4");
var error5=document.querySelector("#error5");
var error6=document.querySelector("#error6");
var error7=document.querySelector("#error7");

let expr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let nameexp =/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
let phexp=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// let pwdexp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ 

function validate(){
    if(fname.value.trim()==""||lname.value.trim()==""||email.value.trim()==""||pwd.value.trim()==""||ph.value.trim()=="")
    {
        alert("please fill the fields");
        return false;
    } 
    else{
        return (verifyemail() && verifyfname() && verifylname() && verifyph() && verifypwd() && validatePassword() ) ;
    }
}

 function verifyemail()
        {
            if(expr.test(email.value)){
                email.style.border="2px solid green";
                return true;
            }
            else{
                error3.innerHTML="please enter a valid email address"
                email.style.border="2px solid red";
                error3.style.color="red";
                error3.style.fontSize="smaller";
                return false;
            }   
        }
    function verifyfname()
    {
        if(nameexp.test(fname.value)){
            fname.style.border="2px solid green";
            return true;
        }
        else{
            error1.innerHTML="please enter your first name";
           fname.style.border="2px solid red";
           error1.style.color="red";
           error1.style.fontSize="x-small";
            return false;
        }   
    }

    function verifylname()
        {
            if(nameexp.test(lname.value))
            {
                lname.style.border="2px solid green";
                return true;
            }

            else{
                error2.innerHTML="please enter your last name";
                lname.style.border="2px solid red";
                error2.style.color="red";
                error2.style.fontSize="x-small";
                return false;
            }
        }

        function verifyph()
        {
            if(phexp.test(ph.value))
            {
                ph.style.border="2px solid green";
                return true;
            }

            else{
                error7.innerHTML="phone number should be of 10 digits";
                error7.style.color="red";
                error7.style.fontSize="x-small";
                ph.style.border="2px solid red";
                return false;
            }
        }


        function verifypwd()
        {
            error4.style.fontSize="smaller";
            if (pwd.value.length <=8) {
                error4.innerHTML = "please enter password";
                error4.style.color="red";
                error4.style.fontSize="x-small";
                return false;
            }
     
            //Regular Expressions.
            var regex = new Array();
            regex.push("[A-Z]"); //Uppercase Alphabet.
            regex.push("[a-z]"); //Lowercase Alphabet.
            regex.push("[0-9]"); //Digit.
            regex.push("[$@$!%*#?&]"); //Special Character.
     
            var passed = 0;
     
            //Validate for each Regular Expression.
            for (var i = 0; i < regex.length; i++) {
                if (new RegExp(regex[i]).test(pwd.value)) {
                    passed++;
                }
            }
     
            //Validate for length of Password.
            if (passed > 2 && pwd.value.length > 8) {
                passed++;
            }
            else{
            error4.innerHTML="password is invalid";
            error4.style.color="red";
            error4.style.fontSize="x-small";
                return false;
            }
     
            //Display status.
            var color = "";
            var strength = "";
            switch (passed) {
                case 0:
                case 1:
                    strength = "Weak";
                    color = "red";
                    break;
                case 2:
                    strength = "Good";
                    color = "darkorange";
                    break;
                case 3:
                case 4:
                    strength = "Strong";
                    color = "green";
                    break;
                case 5:
                    strength = "Very Strong";
                    color = "darkgreen";
                    break;
            }
            error4.innerHTML = strength;
            error4.style.color = color;
            
            
        }
            
        
function validatePassword(){
  if(pwd.value != pwd1.value) {
    pwd1.setCustomValidity("Passwords Don't Match");
  } 
  else {
    pwd1.setCustomValidity('');
  }
}

pwd.onchange = validatePassword;
pwd1.onkeyup = validatePassword;

function Toggle() { 
    if (pwd.type === "password") { 
        pwd.type = "text"; 
    } 
    else { 
        pwd.type = "password"; 
    } 
} 