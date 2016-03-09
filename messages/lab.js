// Your JavaScript goes here...

var myRequest = new XMLHttpRequest();

function parse() {

myRequest.open("GET", "data.json", true);

myRequest.onreadystatechange = function () {
    // Step 3: Data is ready --there is a response
    if (myRequest.readyState == 4 && myRequest.status == 200) {
	data = myRequest.responseText;
	msg = JSON.parse(data);
	elem = document.getElementById("messages");
	elem.innerHTML = "<p id='first'>" + msg[0]["content"] + "&nbsp<span class='user'>" + msg[0]["username"] + "</span></p>" + "<br/>" + "<p id='second'>" + msg[1]["content"] + "&nbsp<span class='user'>" + msg[1]["username"] + "</span></p>";
    }
    else if (myRequest.readyState == 4 && myRequest.status != 200) {
	document.getElementById("message").innerHTML = "<p>Something went wrong</p>";
    }
};
 myRequest.send(null); // null means no data nec to send
}