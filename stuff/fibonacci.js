// nth fibonacci number
// fibonacci sequence reminder: sequence of numbers where the value of nth number is the sum of the values of n + (n-1)

function announceResult(n, v) {
	console.log(`The number in position ${n} in the Fibonacci sequence is`, v);
}

// 1
function getFiboN(n) {
	let n1 = 0;
	let n2 = 1;
	let result = 0;
	let i = 1;

	while (i < n) {
		let n3 = n1 + n2;
		n1 = n2;
		n2 = n3;
		result = n3;
		i++;
	}

	return announceResult(n, result);
}

getFiboN(12);


// 2 

function getFiboN2(n) {
	let list = [0 ,1];

	if (n < 2) return announceResult(n, n);

	for (let i = 2; i <= n; i++){
		list[i] = list[i-1] + list[i-2];
	}

	return announceResult(n, list[n]);
}

getFiboN2(12);

// 3

function getFiboN3(n) {
	if (n <= 1) return n;

	return getFiboN3(n-1) + getFiboN3(n-2);
}

announceResult(12, getFiboN3(12));