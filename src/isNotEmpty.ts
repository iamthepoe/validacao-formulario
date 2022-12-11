function isNotEmpty(inputs: Array<HTMLInputElement>){
	let isValid = true;
	inputs.forEach(input=>{
		if(!input.value){
			isValid = false;
		}
	});
	return isValid;
}

export default isNotEmpty;