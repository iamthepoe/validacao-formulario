const form = document.querySelector('#form') as HTMLFormElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;
const userInput = document.querySelector('#username') as HTMLInputElement;
const passwordInput = document.querySelector('#password') as HTMLInputElement;
const confirmInput = document.querySelector('#password2') as HTMLInputElement;
const ErrorMessages = document.querySelectorAll('.error-message') as NodeListOf<HTMLSpanElement>;

import isEmail from 'validator/lib/isEmail';
import isValidUsername from './isValidUsername';
import isValidPassword from './isValidPassword';
import isNotEmpty from './isNotEmpty';

form.addEventListener('submit', function(event){
	let success = true;
	if(!isNotEmpty([emailInput, userInput, passwordInput, confirmInput])){
		alert('Todos os campos precisam estar preenchidos!');
		success = false;
	}else{

		if(!isValidUsername(userInput.value)){
			ErrorMessages[0].style.display = 'contents';
			success = false;
		}

		if(!isEmail(emailInput.value)){
			ErrorMessages[1].style.display = 'contents';
			success = false;
		}

		if(!isValidPassword(passwordInput.value, confirmInput.value)){
			ErrorMessages[3].style.display = 'contents';
			success = false;
		}
	}

	if(success){
		alert('Você foi cadastrado com sucesso.');
	}else{
		event.preventDefault();
	}


});
