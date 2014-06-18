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
		var phone-no-validation = document.getElementById("phonenum").value
		var phoneno = /^\d{10}$/;
	if( fname == "" )
   	{
    	var x= document.getElementById("errorBox").focus() ;
	 	document.getElementById("errorBox").value;
   		alert("enter the first name");
    	 return false;
 	  }


 
    
  if(inputtxt.value.match(phoneno))  
  {  
      return true;  
  }  
  else  
  {  
     alert("Not a valid Phone Number");  
     return false;  
  }  
}  
- See more at: http://www.w3resource.com/javascript/form/phone-no-validation.php#sthash.wcSGwQ9d.dpuf