// Calculate the number of trips for X people with
// A[k] their weight
// B[k] their target floor

function solution(A, B, M, X, Y) {
    // A -> person's weight
    // B -> person's target floor 
    // A B index designate the same person
    // M -> max floors
    // X -> max number of people that can fit
    // Y -> max weight of people the elevator can take
    
	let stopsMade = 0;
    
	let peopleInside = [];
	let combinedWeight = 0;
	let queue = 0;
    
    // as long as there are people in the queue
	while (queue <= X && queue < A.length) {
        
		if (combinedWeight <= Y && A[queue] + combinedWeight <= Y) {
			peopleInside.push({
				weight: A[queue],
				floor: B[queue]
			}); // insert the person    
			combinedWeight += A[queue];
            // continue with the queue
			queue++;
		}

        // check if the next person will go over weight capacity
		if (queue >= X || A[queue] + combinedWeight > Y) {
            // send the elevator up
			let floorCount = {};
			for (let i = 0; i < peopleInside.length; i++) {
				if (!floorCount[peopleInside[i]['floor']]) floorCount[peopleInside[i]['floor']] = true;
			}
			// console.log(Object.keys(floorCount).length);
			stopsMade += Object.keys(floorCount).length;

            // add an extra for returning to ground floor
			stopsMade++;
            
            // reset the values
			peopleInside = [];
			combinedWeight = 0;
		}
	}

	return stopsMade;
}

console.log(solution([40, 40, 100, 80, 20], [3, 3, 2, 2, 3], 3, 5, 200));
console.log(solution([40, 40, 100], [3, 3, 2], 3, 3, 100));