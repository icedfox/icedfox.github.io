function argumentCall() {
	console.log(arguments); // object
	let args = Array.prototype.slice.call(arguments);

	console.log(args);
}

argumentCall(1, 2, 3, 4);