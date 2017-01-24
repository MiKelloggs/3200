var myHelloFunc = function () {
	console.log("hi");
};

myHelloFunc();

console.log("Does this work?");

var h = document.getElementById("header");
var score = 0
var answerInput = document.getElementById("answer");


console.log("header:", h);

var continueButton = document.getElementById("continue");
var submitButton = document.getElementById("submit");

var messages = null;

continueButton.onclick = function () {
        console.log("the button was clicked!");
    
        document.getElementById('answer').value='';
    
        var r = Math.floor(Math.random() * messages.length);
        var message = messages[r];
        var character = message["character"];
        var quote = message["quote"];
        
    
        console.log(r, quote);
    
    var newListItem = document.createElement("li");
        newListItem.innerHTML = quote;

        var list = document.getElementById("list");
        list.appendChild(newListItem);

    
    submitButton.onclick = function () {
        console.log("the button was clicked!");

        var answerInput = document.getElementById("answer");
        var answer = answerInput.value;
        
        if (answer == character){
            score = score + 1;
            
            var newListItem = document.createElement("li");
            newListItem.innerHTML = answer + ": Correct, your current score is: " + score;

            var list = document.getElementById("list");
            list.appendChild(newListItem);
        }
        else {
            var newListItem = document.createElement("li");
            newListItem.innerHTML = answer + ": Wrong, your current score is: " + score;

            var list = document.getElementById("list");
            list.appendChild(newListItem);
        }

        
    };
};

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
	if (request.readyState == XMLHttpRequest.DONE) {
		if (request.status == 200) {
			console.log("hey, something worked...");
			console.log(request.responseText);
			messages = JSON.parse(request.responseText);
			
		}
		else {
			console.error("that didnt work...");
		}
	}
	
};

request.open("GET", "https://api.myjson.com/bins/a0zdx");
request.send();







