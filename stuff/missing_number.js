// find the missing number from a sequence of integers

function findMissingNumber(list) {
	// calculate the sum of the integers in the list and compare it with the sum of the values
	let sum = list.reduce((current, next) => next+current); // actual sum of values	
	let completeSum = 0; // the expected sum if the missing number was included

	// add up the values of the expected sum in order to compare
	for (let i = 1; i < list.length +2; i++) {
		completeSum += i;
	}

	console.log('The missing number is:', completeSum - sum);
}

let list = [8, 1, 13, 9, 12, 6, 15, 2, 10, 4, 11, 3, 5, 7];
findMissingNumber(list);