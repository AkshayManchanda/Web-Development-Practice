var button  = document.querySelector("button");
var colors = ["red","orange","blue","green","violet","magenta","black","brown","yellow","pink","gray","white"];
var i=0;
button.addEventListener("click",function(){
	if(i===colors.length)
		i=0;
	document.body.style.background = colors[i];
	i++
})