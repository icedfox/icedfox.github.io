function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    
	let P = A.filter(a => a > 0);
	let max = P.length + 1;
	let result = 1;
	let m = {};

	P.forEach((p, i) => {
		m[i] = false;
		if (p < max) m[p] = true;
	});

	// for (let i = 1; i < max; i++) {
	// 	m[i] = false;
	// }
    
	// for (let i = 0; i < max; i++) {
	// 	if (P[i] < max) m[P[i]] = true;
	// }

	while (m[result]) {
		result++;
	}

	return result;
}

let a = [1, 3, 6, 4, 1, 2];
let b = [1, 2, 3];
let c = [-1, -3];

console.log(solution(a));
console.log(solution(b));
console.log(solution(c));