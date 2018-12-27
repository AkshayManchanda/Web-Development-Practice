var h1 = document.querySelector("h1");
var lis  = document.querySelectorAll("li");

h1.addEventListener("click",function(){
	h1.style.background = "orange";
})

for(var i=0;i<lis.length;i++){
	lis[i].addEventListener("click",function(){
		this.style.color = "pink";
	})
}