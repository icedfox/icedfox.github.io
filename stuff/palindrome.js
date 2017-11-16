// palindrome checker

function isPalindrome(str) {
	// check if last letter = first letter, and so on
	// 
	let middle = str.length/2;
	let j = 0;

	let result = true;
	
	for (let i = str.length -1; i >= middle; i--) {
		if (str[i] !== str[j]) {
			result = false;
			break;
		}
		j++;
	}

	console.log(`Is '${str}' a palindrome? ${result}`);
}

isPalindrome('qwertyuiopoiuyatrewq');