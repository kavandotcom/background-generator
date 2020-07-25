var database=[
	{
		username:"kavan",
		password:"123"
	}
];

var newsFeed=[
	{
		username:"ben",
		newsFeed:"i dont care"
	},
	{
		username:"sally",
		newsFeed:"wassup"
	}
];

var usernamePrompt = prompt("Enter username:");
var passwordPrompt = prompt("Enter password:");

function signIn(user , pass){
	if(user===database[0].username &&
		pass===database[0].password){
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password");
	}
}

signIn(usernamePrompt,passwordPrompt);