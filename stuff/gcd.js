// greatest common divis0r between two numbers

function getGCD(a, b) {
	let divisor = 2;
	let result = 1;

	while (a >= divisor && b >= divisor) {
		if (a % divisor == 0 && b % divisor == 0) result = divisor;
		divisor++;
	}

	console.log(`The greatest common divisor between ${a} and ${b} is ${result}`);
}

getGCD(100, 1337);