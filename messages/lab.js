// Your JavaScript goes here...

var myRequest = new XMLHttpRequest();

function parse() {

myRequest.open("GET", "data.json", true);


myRequest.onreadystatechange = function () {

    // Step 3: Data is ready --there is a response!
    /*    if (myRequest.readyState == 4) {
	result = "";
	raw = myRequest.responseText;
	myData = JSON.parse(raw);
	msg = document.getElementById("messages");

	result = myData["content"][0] + "&nbsp" + myData["username"][0];
	elem.innerHTML = result;
	}*/


    if (myRequest.readyState == 4 && myRequest.status == 200) {
	console.log("Got the data back!");
	data = myRequest.responseText;
	console.log(data);
	raw = JSON.parse(data);
	elem = document.getElementById("messages");
	elem.innerHTML = "<p>Testing</p>"; //+ loc["description"] + "</p>";
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