
const emailRegister = document.getElementById("emailRegister");
const passwordRegister = document.getElementById("passwordRegister");
const passwordConfirmation = document.getElementById("passwordConfirmation");
const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const registerLoginHeader = document.getElementById("registarLoginHeader");
const contaHeader = document.getElementById("contaHeader");

const url = "https://martilist.azurewebsites.net/rest/user";
const urlLogin = "https://martlist.azurewebsites.net/rest/user/login";
const urlLogout = "https://martlist.azurewebsites.net/rest/user/logout"
let parsedId;

function validate() {
	if (password.value != confirmation.value) 
		alert("As Palavras-passe não coincidem!");
	else
		processRegister();
}

function processRegister() {

	emailRegister = document.getElementById("emailRegister");
	passwordRegister = document.getElementById("passwordRegister");

	let obj = {
		id: emailRegister.value,
		pwd: passwordRegister.value
	};

	let objJSON = JSON.stringify(obj);
	
	let xmlhttp = new XMLHttpRequest();
	
	if (xmlhttp) {
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4) {
				if (xmlhttp.status === 200) {
					//window.location.replace(".html");
					window.location.replace("index.html");
				} else {
					console.log(xmlhttp.status);
					alert("Os dados que forneceu encontram-se incorretos! Verifique os dados e tente novamente");
				}
			}
		}
		xmlhttp.open("POST", url, true);
		xmlhttp.setRequestHeader("Content-Type", "application/json");
		xmlhttp.send(objJSON);
	}
}

function processLogin() {

	emailLogin = document.getElementById("emailLogin");
	passwordLogin = document.getElementById("passwordLogin");

	let obj = {
		id: emailLogin.value,
		pwd: passwordLogin.value
	};

	let objJSON = JSON.stringify(obj);
	
	let xmlhttp = new XMLHttpRequest();
	
	if (xmlhttp) {
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4) {
				if (xmlhttp.status === 200) {
					
                    window.localStorage.setItem('login', emailLogin.value);
					registerLoginHeader.style = "display: none;";
					contaHeader.style="";
					window.location.replace("index.html");
				} else {
					console.log(xmlhttp.status);
					alert("Os dados que forneceu encontram-se incorretos! Verifique os dados e tente novamente");
				}
			}
		}
		xmlhttp.open("POST", urlLogin, true);
		xmlhttp.setRequestHeader("Content-Type", "application/json");
		xmlhttp.send(objJSON);
	}

	
}

function isAuthenticated() {
	let id = window.localStorage.getItem("login");
	parsedId = JSON.parse(id);
	if (id != null) {
			console.log('User is authenticated.');
			console.log(parsedtoken.username);
			emailDisplay.innerHTML = parsedId;                 //adicionar à interface

		}
	else
		logout();
}

function logout() {
	window.localStorage.removeItem('login');
	let xmlhttp = new XMLHttpRequest();
	if (xmlhttp) {
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4) {
				if (xmlhttp.status == 200) {
					console.log(parsedId + "logged out");
					registerLoginHeader.style = "";
					contaHeader.style="display: none;";		
					window.location.replace("index.html");	
				}
			} else {
				console.log(xmlhttp.status);
			}
		}
	}
	xmlhttp.open("DELETE", urlLogout + "/" + parsedId, true);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	xmlhttp.send(parsedId);
	
	
	//window.open("login.html", "_self");
}
