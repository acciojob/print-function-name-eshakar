//your JS code here. If required.
function functionName() {
	alert("functionName");
}

functionName();

function functionName() {
	alert(arguments.callee.name);
}

function AccioJob() {
	alert(arguments.callee.name);
}


functionName();
AccioJob();