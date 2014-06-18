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

function signup()
{

}

function space_validation()
{
	alert("dddddddd");
}

/*
=====================================================

*/

function Submit()
{
		var fname = document.getElementById("errorBox").value
		var phone_num = document.getElementById("phonenum").value
		
	if( fname == "" )
   	{
    	document.getElementById("errorBox").focus() ;
	 
   		alert("enter the first name");
    	 return false;
 	}


 	  var phoneno_format = /^\d{10}$/;
  if(phoneno_format.test(phone_num))  
  {  
      
  }  
  else  
  {  
     alert("Not a valid Phone Number");  
     return false;  
  }  
}  
