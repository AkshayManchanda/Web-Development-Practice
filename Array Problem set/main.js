function printReverse(a){
	for(var i=a.length-1;i>=0;i--){
		console.log(a[i]);
	}
}

function isUniform(a){
	for(var i=1;i<a.length;i++){
		if(a[i]!==a[0]){
			return false;
		}
	}
	return true;
}

function sumArray(a){
	sum=0;
	a.forEach(function(e){
		sum+=e;
	})
	console.log(sum)
}

function max(a){
	m = a[0];
	for(var i=1;i<a.length;i++){
		if(a[i]>m)
			m=a[i];
	}
	return m;
}

