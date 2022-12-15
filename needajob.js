function validate() {
			let name = document.querySelector("#name");
			let contact = document.querySelector("#contact");
			let firstName = document.querySelector("#firstName");
			let lastName = document.querySelector("#lastName");
			let jobEmail = document.querySelector("#jobEmail");
			let contactNumber = document.querySelector("#contactNumber");
			var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			var phone = /^\d{10}$/;
			
			name.firstName.style.backgroundColor = "Lime";
			name.lastName.style.backgroundColor = "Lime";
			contact.jobEmail.style.backgroundColor = "Lime";
			contact.contactNumber.style.backgroundColor = "Lime";
			
			if (name.firstName.value.length == 0 || null) {
				alert("First Name Cannot Be Empty.\nPlease Try Again.");
				name.firstName.style.backgroundColor = "Red";
				event.preventDefault(); }
	
			if (name.lastName.value.length == 0 || null) {
				alert("Last Name Cannot Be Empty.\nPlease Try Again.");
				name.lastName.style.backgroundColor = "Red";
				event.preventDefault(); }
				
			if (contact.jobEmail.value.length > 0  && contact.jobEmail.value.match(email)) 
			{
			confirm("Are You Sure Your Email Is Correct?"); }
			else {
				alert("Email Is Invalid.\nPlease Try Again.");
				contact.jobEmail.style.backgroundColor = "Red";
				event.preventDefault(); 
				}
				
			if (contact.contactNumber.value.length >0 && contact.contactNumber.value.match(phone)) {
				confirm("Are You Sure Your Phone Number Is Correct?"); }
				
			else {
				alert("Phone Number Is Invalid.\nPlease Try Again.");
				event.preventDefault(); 
				contact.contactNumber.style.backgroundColor = "Red";
			}

}
			verify.validation.addEventListener("click", validate);
