    function homepage()
            {
                location.replace("https://alphadevs.tech/")
          
			}
			function validate1()
			{
				var username=document.getElementById("user").value;
				var regx=/@gmail.com/;
				
				
				
	if(regx.test(username))
	           {
		       
				   document.getElementById("lb").style.display="none";
	            }
	else 
		{
			alert("not valid user");
			document.getElementById("lb").style.display="";
		}
				
			}
			
			
			
			//pass check 
			function upper_case()
			{
				var y=document.getElementById("pass").value;	
				
if (y.length < 8) {
  alert("Your password needs a minimum of Eight characters")
		document.getElementById("lb1").style.display="";
} else if (y.search(/[a-z]/) < 0) {
  alert("Your password needs a lower case letter")
	document.getElementById("lb1").style.display="";
} else if(y.search(/[A-Z]/) < 0) {
  alert("Your password needs an uppser case letter")
	document.getElementById("lb1").style.display="";
} else  if (y.search(/[0-9]/) < 0) {
  alert("Your password needs a number")
	document.getElementById("lb1").style.display="";
} else {
    
	document.getElementById("lb1").style.display="none";
	
}
			}
			
			function must()
			{
				alert("password must be atleast 8 char long including atleast one uppercse, one lower case and one number")
			}
				
				
		