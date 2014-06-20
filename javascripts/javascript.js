//Validation

/*

================Validation for Sign In form=================================================
*/

function signin()
{
	
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	
	var email_format = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if(email=="") 
	{
		document.getElementById("email").focus();
		alert("Please enter the email");
		return false;
	}
	else
	{
		
		if(email_format.test(email)) 
		{
			
		}
		else
		{
			document.getElementById("email").value;
			alert("Please enter the  correct email address format");
			return false;
		}
	}

	if(password=="") 
	{
		document.getElementById("password").focus();
		alert("Please enter the password");
		return false;
	}
}


/*

================Reset for Sign In form=================================================
*/
function reset_signin()
{
	document.getElementById("email").value="";
	document.getElementById("password").value="";
}


/*

=====================================================

*/

function signup()
{
	var email = document.getElementById("email").value;
	var uname = document.getElementById("uname").value;
	var lname = document.getElementById("lname").value;
	var phonenum = document.getElementById("phonenum").value;
	var password = document.getElementById("password").value;
	var cpassword = document.getElementById("cpassword").value;
	var male = document.getElementById("male").checked;
	var female = document.getElementById("female").checked;
	var selection = document.getElementById("selection").value;
	var pincode = document.getElementById("pincode").value;
	var kerala = document.getElementById("check1").checked;
	var tamil = document.getElementById("check2").checked;

	var phonenum_format = /^\d{10}$/;
	
	var email_format = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(uname == "" )
  	 {
    	document.getElementById("uname").focus();
	 
   		alert("enter the first name");
    	 return false;
 	}
 	if(lname == "" )
  	 {
    	document.getElementById("lname").focus();
	 
   		alert("enter the last name");
    	 return false;
 	}
 	if(email=="") 
	{
		document.getElementById("email").focus();
		alert("Please enter the email");
		return false;
	}
	else
	{
		
		if(email_format.test(email)) 
		{
			
		}
		else
		{
			document.getElementById("email").value;
			alert("Please enter the  correct email address format");
			return false;
		}
	}

 	
 if(password =="")
 {
 	document.getElementById("password").focus();
 	alert("please enter the password");
 	return false;
 }

 else
	{ 
 		if(cpassword == "") 
 		{
 			document.getElementById("cpassword").focus();
 			alert("Re-enter the password");
 			return false;
 		}
 		else
 		{
 			if (password!=cpassword) 
 			{
 				document.getElementById("cpassword").focus();
 				alert("check your password");
 				return false;
 			}
 		}
	}

 	if(!male&&!female)
 	{
 		alert("select gender");
 		return false;
 	}

 	if(selection == "0")
    {
        	alert("select your Location");
        	return false;
    }
    if(!kerala&&!tamil)
 	{
 		alert("select your Language");
 		return false;
 	}
 	if ( phonenum == "")
 	{
 		document.getElementById("phonenum").focus();
 		alert("please enter the phone Number");
 		return false;
 	}
 	else
 	{


 		if(phonenum_format.test(phonenum))  
  		{  
    
  		}   
 		else  
  		{  
     		alert("Not a valid Phone Number");
     		document.getElementById("phonenum").focus();  
    		 return false;  
 		} 
 	} 
 	

    if( pincode == "")
    {
    	alert("please enter your pincode");
    	document.getElementById("pincode").focus();
    	return false;
    }
   
    	if(isNaN(pincode))
        {
        	alert("Enter valid number");
            document.getElementById("pincode").value="";
            document.getElementById("pincode").focus();
            return false;

        }
     else
    {
        if(pincode.length!==6)
        {
            alert("Pincode with wrong length");
             document.getElementById("pincode").focus();
             return false;
        }
    }

   	
}	


/*-------------------------------
  For signup reset
 --------------------------------*/
 function reset_signup()
{
	document.getElementById("email").value="";
	document.getElementById("password").value="";
	document.getElementById("uname").value="";
	document.getElementById("phonenum").value="";
	document.getElementById("password").value="";
	document.getElementById("cpassword").value="";
	document.getElementById("male").checked="";
	document.getElementById("female").checked="";
	document.getElementById("selection").value=="";
	document.getElementById("pincode").value="";
}	
	

       


