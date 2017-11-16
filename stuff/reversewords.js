// given a sentence, reverse the letters in each word, but not the sentence itself

const sentence = 'The brown fox has jumped over the fence. It\'s now free';

function reverseWords () {
	let list = sentence.split(/\s/).map(word => {
		let str = '';
		let dotIndex = word.indexOf('.');

		for (var i = word.length - 1; i >= 0; i--) {
			if (word[i] != '.') str += word[i];
		}

		if (dotIndex >= 0) str += '.';

		return str;
	});

	console.log(list.join(' '));
}

reverseWords();

function reversePhrase () {
	let list = sentence.split('');

	// method 1 -> reversed for loop
	let output1 = '';
	for (var i = list.length - 1; i >= 0; i--) {
		output1 += list[i];
	}

	// method 2 -> built in reverse
	let output2 = list.reverse().join('');

	console.log(output1);
	console.log(output2);
}

reversePhrase();