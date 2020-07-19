const readlineSync = require('readline-sync');

console.log(`LET'S PLAY SOME TRIVIA!!!`);

let categories = [
	{
		history: {
			question: 'Question?',
			answer: 'Answer'
		}
	},
	{
		geography: {
			question: 'Question?',
			answer: 'Answer'
		}
	},
	{
		sports: {
			question: 'Question?',
			answer: 'Answer'
		}
	},
	{
		science: {
			question: 'Question',
			answer: 'Answer'
		}
	},
	{
		popCulture: {
			question: 'Question?',
			answer: 'Answer'
		}
	},
	{
		random: {
			question: 'Question?',
			answer: 'Answer'
		}
	}
];

// console.log(categories[3]);

// const pick = categories.forEach((el) => console.log(el));

// index = readlineSync.keyInSelect(categories, 'Pick your category');
// console.log('You have picked ' + categories[index]);

// for (let i = 0; i < categories.length; i++) {
// 	console.log(categories[i]);
// }

const pickedCategory = () => {
	for (let i = 0; i < 5; i++) {
		index = readlineSync.keyInSelect(categories, 'Pick your category');
		console.log('You have picked ' + categories[index]);
		if (categories[index] === categories[0]) {
			let question1 = readlineSync.question(categories[0].history.question);
			if (question1 == categories[0].history.answer) {
				console.log('You are correct!!!');
			} else {
				console.log('Sorry, wrong answer');
			}
		}
		if (categories[index] === categories[1]) {
			let question2 = readlineSync.question(categories[1].geography.question);
			if (question2 == categories[1].geography.answer) {
				console.log('You are correct!!!');
			} else {
				console.log('Sorry, wrong answer');
			}
		}
		if (categories[index] === categories[2]) {
			let question3 = readlineSync.question(categories[2].sports.question);
			if (question3 == categories[2].sports.answer) {
				console.log('You are correct!!!');
			} else {
				console.log('Sorry, wrong answer');
			}
		}
		if (categories[index] === categories[3]) {
			let question4 = readlineSync.question(categories[3].science.question);
			if (question4 == categories[3].science.answer) {
				console.log('You are correct!!!');
			} else {
				console.log('Sorry, wrong answer');
			}
		}
		if (categories[index] === categories[4]) {
			let question5 = readlineSync.question(categories[4].popCulture.question);
			if (question5 == categories[4].popCulture.answer) {
				console.log('You are correct!!!');
			} else {
				console.log('Sorry, wrong answer');
			}
		}
		if (categories[index] === categories[5]) {
			let question6 = readlineSync.question(categories[5].random.question);
			if (question6 == categories[5].random.answer) {
				console.log('You are correct!!!');
			} else {
				console.log('Sorry, wrong answer');
			}
		}
	}
};

pickedCategory();
