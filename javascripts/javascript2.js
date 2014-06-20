
function signup()
var password = document.getElementById("name").value;
if(password=="") 
	{
		document.getElementById("name").focus();
		alert("Please enter the password");
		return false;
	}





function sign_up()
{
		var name = document.getElementById("name").value;
		//var phone_num = document.getElementById("phonenum").value;
		//var phonenum_format = /^\d{10}$/;
		
	if( name=="" )
   	{
    	document.getElementById("name").focus() ;
	 
   		alert("enter the name");
    	 return false;
 	}
 }	