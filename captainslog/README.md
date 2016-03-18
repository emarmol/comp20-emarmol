Identify what aspects of the work have been correctly implemented and what have not.
	 1. This lab has the following correct features:
	   	+When enter is pressed, the log section updates in real time, with the latest update showing first.
		+Includes a README file
		+ Local storage was attempted

	2. I did not implement the local storage method correctly.
	    	+ Currently, the message and timestamp are stored, and if you refresh the page, the log appears again, but in the incorrect order.
		+ If a new entry is typed into the text field, after refreshing the page the local storage is erased, and the log only displays what has been typed since the refresh.
		+ I attempted various setItem for local storage, and separated two different keys for the message and timestamp, however when this method was done, only one entry was stored (the last entry that was typed), and thus when the page would refresh it would only show you the last thing you typed.
		+ If I had more time I would fix my current problem with the following possible solutions:
		     -Storing the keys for each individual message in a unique key (i.e. create an id for each element that is prepended, and use the unique key to add the list back upon refresh of the page

Identify anyone with whom you have collaborated or discussed the assignment.
	 1. I worked alone on this assignment
Say approximately how many hours you have spent completing the assignment.
    	1. I worked for about 5-6 hours on this assignment