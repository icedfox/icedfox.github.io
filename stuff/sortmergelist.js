// merge two arrays and sort them

function mergeAndSort(list1, list2) {
	let list3 = list1.concat(list2);

	list3.sort(function(a, b) {
		if (a>b) return 1;
		else if (a<b) return -1;
		else return 0;
	});

	console.log('Merged and sorted list: ', list3);
}

let list1 = [0, 1, 4, 6, 9];
let list2 = [2, 3, 4, 5, 6, 10];
mergeAndSort(list1, list2);