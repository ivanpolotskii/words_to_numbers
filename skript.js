function parseInt(string) {
	console.log(string);
	let obj = {
		'million': '*1000000',
		'zero': 0,
		'one': '+1',
		'two': '+2',
		'three': '+3',
		'four': '+4',
		'five': '+5',
		'six': '+6',
		'seven': '+7',
		'eight': '+8',
		'nine': '+9',
		'ten': '+10',
		'eleven': '+11',
		'twelve': '+12',
		'thirteen': '+13',
		'fourteen': '+14',
		'fifteen': '+15',
		'sixteen': '+16',
		'seventeen': '+17',
		'eighteen': '+18',
		'nineteen': '+19',
		'twenty': '+20',
		'thirty': '+30',
		'forty': '+40',
		'fifty': '+50',
		'sixty': '+60',
		'seventy': '+70',
		'eighty': '+80',
		'ninety': '+90',
		'hundred': ')*100',
		'thousand': ')*1000',
	}
	let arr = [];
	if (/thousand/.test(string) && string.split(' ').length > 3) {
		arr.push(string.slice(0, string.indexOf('thousand') + 8));
		arr.push(string.slice(string.indexOf('thousand') + 9));
		if (arr[1] === '') {
			let stringArr = arr[0].replace(/-/g, ' ').split(' ');
			let newn = stringArr.map(el => obj[el]).join('');
			if (/\)/.test(newn)) {
				let numquotes = newn.match(/\)/g).length;
				newn = '('.repeat(numquotes) + newn;
			}
			let newNum = eval(newn);
			return newNum;
		}
		let result = 0;
		arr.map(string => {
			let stringArr = string.replace(/-/g, ' ').split(' ');
			let newn = stringArr.map(el => obj[el]).join('');
			if (/\)/.test(newn)) {
				let numquotes = newn.match(/\)/g).length;
				newn = '('.repeat(numquotes) + newn;
			}
			let newNum = eval(newn);
			result += newNum;
		})
		return result;
	} else {
		let stringArr = string.replace(/-/g, ' ').split(' ');
		let newn = stringArr.map(el => obj[el]).join('');
		if (/\)/.test(newn)) {
			let numquotes = newn.match(/\)/g).length;
			newn = '('.repeat(numquotes) + newn;
		}
		let newNum = eval(newn);
		return newNum;
	}
}

let words = document.querySelector('.text'),
	digits = document.querySelector('.num');

words.addEventListener('input', function () {
	if (parseInt(words.value) != undefined && parseInt(words.value) != NaN) {
		digits.value = parseInt(words.value);
	}
})