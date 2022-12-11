function isValidUsername(user: string){

	if(user.length>30) return false;
	let isValid = true;
	let splitedUsername = user.split('');

	const conditions = [
		'#', 
		'@', 
		'!', 
		'%', 
		'*', 
		"'", 
		'"', 
		':', 
		',', 
		';', 
		'^', 
		'`', 
		'{', 
		'}',
		'º',
		'[',
		']',
		'+',
		'§',
		' '
	];

	splitedUsername.forEach((character)=>{
		for(let i = 0; i<conditions.length; i++){
			if(character === conditions[i]){
				isValid = false;
				break;
			}
		}
	});

	return isValid;
}

export default isValidUsername;