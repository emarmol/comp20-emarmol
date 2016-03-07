// Your JavaScript goes here...

var myRequest = new XMLHttpRequest();
var result = "";
var raw;

myRequest.open("GET", "data.json", true);


request.onreadystatechange = function() {

    // Step 3: Data is ready --there is a response!
    if (myRequest.readyState == 4) {
	result = "";
	raw = myRequest.responseText;
	theScheduleData = JSON.parse(raw);
	elem = document.getElementById("messages");

	result = theScheduleData["content"][0] + "&nbsp" + theScheduleData["username"][0];
	/*for (i = 0; i < theScheduleData["1"]["Trips"].length; i++) {
	    result += "<p>Next Red Line train to " + theScheduleData["TripList"]["Trips"][i]["Predictions"][0]["Stop"] + ", " + theScheduleData["TripList"]["Trips"][i]["Destination"] + " bound, will come in " + theScheduleData["TripList"]["Trips"][i]["Predictions"][0]["Seconds"] + " seconds</p>";
	    }*/
	elem.innerHTML = result;
    }
};

// Step 3: Fire off the request
request.send(null); // null means no data nec to send