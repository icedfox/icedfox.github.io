function rand5(){
	return Math.floor(1 + Math.random() * 4);
}

function rand7(){
	return 5 + rand5() / 5 * 2;
}

console.log(rand7());