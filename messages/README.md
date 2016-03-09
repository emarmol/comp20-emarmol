
1. This lab includes the following correct elements: correct files names, and git commits, 1 javascript file modifying the text of the id messages in the HTML, no lingering outputs to the javascript console, no jQuery, and no modifying the HTML.

2. I worked on this assignment alone

3. I spend approximately 1.5  hours

PART 2:
Opening the file from local maching:
	 Does it really work? Should it work?
	      No. It should not work because executing an XMLRequest requires a server to get from. In order to open the JSON file, the python server needs to be running.

PART 3:
Loading the Data Given a URI
	Does it work?
	     No. Because Javascript requires the same origin policy, since the json file is from an external source, and my XML request is on the local machine, the request is not allowed to be made. This is why the JSON file being saved to the local maching (e.g. data.json) works, but an external source will not.