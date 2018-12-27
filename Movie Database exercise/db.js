var db=[{
	title:"In Bruges",
	rating: 5,
	watched: true,
},
{
	title:"Frozen",
	rating: 4.5,
	watched: false,
},
{
	title:"Mad Max Fury Road",
	rating: 5,
	watched: true,
},
{
	title:"Les Miserables",
	rating: 3.5,
	watched: false,
}]

db.forEach(function(d){
	var str = "";
	if(d.watched===true)
		str = "watched";
	else str = "not seen";
	console.log("You have "+str+" \""+d.title+"\" - "+d.rating+" stars")
})