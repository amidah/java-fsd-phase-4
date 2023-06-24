function validateForm(){
			var username = document.validateform.uname.value;
			var email = document.validateform.email.value;
			var password = document.validateform.pass.value;
			
			var atposition = email.indexOf("@");
			var dotposition = email.lastIndexOf(".");
			
			
			if(username==null || username==""){
				alert("Name can't be blank");
				return false;
			}
			else if(atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length){
				 alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
				  return false;  
			}
			else if(password.length < 6){
				alert("Password must be atleast 6 characters long.");
				return false;
			}
		}