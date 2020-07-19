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

console.log(categories);
// categories.forEach((el) => console.log(el.history.question));

// for (let i = 0; i < categories.length; i++) {
// 	console.log(categories[i].history.question);
// }

// index = readlineSync.keyInSelect([ `${categories.history}, ${categories.geography}` ], 'Pick your category');
// console.log('You have picked ' + categories[index]);
