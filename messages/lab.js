// Your JavaScript goes here...

var myRequest = new XMLHttpRequest();

function parse() {

myRequest.open("GET", "data.json", true);


myRequest.onreadystatechange = function () {

    // Step 3: Data is ready --there is a response
    if (myRequest.readyState == 4 && myRequest.status == 200) {
	console.log("Got the data back!");
	data = myRequest.responseText;
	console.log(data);
	msg = JSON.parse(data);
	elem = document.getElementById("messages");
	elem.innerHTML = "<p>" + msg[0]["content"] + "&nbsp" + msg[0]["username"] + "</p>";
    }
    else if (myRequest.readyState == 4 && myRequest.status != 200) {
	// think 404 or 500
	document.getElementById("message").innerHTML = "<p>Whoops, something went terribly wrongo</p>";
    }
    else {
	console.log("In progress...");
    }



};

// Step 3: Fire off the request
myRequest.send(null); // null means no data nec to send

}