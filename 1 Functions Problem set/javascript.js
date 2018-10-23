function isEven(n){
	if(n%2===0)
		return true;
	else return false;
}

function factorial(n){
	var r=1;
	for(var i=1;i<=n;i++)
		r*=i;
	return r;
}

function kebabToSnake(str){
	return str.replace('-','_');// or (/-/g,'_')
}