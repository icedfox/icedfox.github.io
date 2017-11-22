// Return the length of a linked list
// Each value in the array points to an index thus simulating a linked list
// if the value of the node is -1, exit

function solution(A) {
    
	let index = 0; // this is the starting point
	let counter = 0; // this will be our counter
    
    // the list is empty, return an empty height
	if (A.length === 0) return counter;
    
    // assuming 0 <= A[K] < N
    // keep pointing to the next node until we get the exit signal (-1)
	while (A[index] > -1) {
		counter++;
		index = A[index];
	}
    
	return ++counter;
}

let test = [1, 3, -1, 2, 5];

console.log(solution(test));