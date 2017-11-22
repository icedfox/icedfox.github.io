// For a given number with spaces, digits and dashes
// combine digits by 3s, separated by dashes
// If there is one digit remaining, divide last 4 into 2
// e.g. 111-223-3 should be 111-22-33

function convertPhone(S) {
	let string = S.replace(/[\s\-]/g, '').split('');
	let newString = '';

	while (string.length > 4) {
		newString += string[0] + string[1] + string[2];
		string.splice(0, 3);
		newString += '-';
	}
	
	newString += string.reduce((current, next, index) => {
		if (string.length == 4 && index == 2) current += '-';
		return current + next;
	}, '');

	return newString;
}

let a = '00-44  48 5555 8361 1111  2';

console.log(convertPhone(a));