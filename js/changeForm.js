
		
	let isRegister = true;

	let registerForm = '<input type = "text" placeholder = "Imię"/>' +
					'<input type = "email" placeholder = "E-mail"/>' +
					'<input type = "password" placeholder = "Hasło"/>' +
					'<input type = "password" placeholder = "Powtórz hasło"/>' +
					'<input type = "submit" id = "register" value = "Zarejestruj"/> ' +
					'<input type = "reset" id = "reset" value = "Wyczyść"/>';
					
	let loginForm = '<input type = "email" placeholder = "E-mail"/>' +
					'<input type = "password" placeholder = "Hasło"/>' +
					'<input type = "submit" id = "register" value = "Zaloguj"/> ' +
					'<input type = "reset" id = "reset" value = "Wyczyść"/>';
					
	let formHandle = document.getElementById("registerForm");
	let loginHandle = document.getElementById("loginButton");
	let registerHandle = document.getElementById("registerButton");
		
	function changeForm(setForm)
	{
		formHandle.innerHTML = setForm;
	}
		
		registerHandle.addEventListener("click", function()
		{
			if (isRegister == false)
			{
				changeForm(registerForm);
				isRegister = true;
				loginHandle.classList.remove("activeButton");
				loginHandle.classList.add("deactiveButton");
				registerHandle.classList.remove("deactiveButton");
				registerHandle.classList.add("activeButton");
				formHandle.setAttribute("action", "#");
			}
		});
		
		
		loginHandle.addEventListener("click", function()
		{
			if (isRegister == true)
			{
				changeForm(loginForm);
				isRegister = false;
				loginHandle.classList.remove("deactiveButton");
				loginHandle.classList.add("activeButton");
				registerHandle.classList.remove("activeButton");
				registerHandle.classList.add("deactiveButton");
				formHandle.setAttribute("action", "#");
			}
		});
