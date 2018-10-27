var todos=[];

window.setTimeout(function() {
    var input = prompt("What would like to do?");
	while(input!=="quit"){
		if(input==="list")
			listTodos();
		else if(input==="new")
			addTodo();
		else if(input==="delete")
			deleteTodo();
	input = prompt("What would you like to do?");
    }
console.log("You, quit the app!");
}, 500);

function listTodos(){
	console.log("*************");
	todos.forEach(function(e,i){
		console.log(i+": "+e);
	});
	console.log("*************");
}

function addTodo(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo(){
	var index = prompt("Enter index");
	todos.splice(index,1);
	console.log("deleted Todo");
}
