// remove dupes from a list

function removeDupes(list) {
	let result = [];

	list.forEach(item => {
		if (result.indexOf(item) < 0) result.push(item);
	});

	console.log('Dupeless list:', result);
}

let list = [0, 0, 0, 1, 2, 3, 4, 4, 5, 6];
removeDupes(list);