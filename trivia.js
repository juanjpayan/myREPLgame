const readlineSync = require('readline-sync');

console.log(`LET'S PLAY SOME TRIVIA!!!`);

let categories = [ 'history', 'sports', 'geography', 'science', 'popCulture' ];
let historyQuestions = [
	{
		question: 'What Year did the French Revolution start?',
		answer: '1789'
	},
	{
		question: 'What year was the US Constitution signed?',
		answer: '1787'
	}
];
let randomQuestion = Math.floor(Math.random() * historyQuestions.length);
// console.log(historyQuestions[randomQuestion].question);

let question1;
let question2;
let question3;
let question4;
let question5;

let points = 0;

const pickedCategory = () => {
	for (let i = 0; i < 5; i++) {
		let index = readlineSync.keyInSelect(categories, 'Pick your category');
		console.log('You have picked ' + categories[index]);
		if (categories[index] == categories[0]) {
			question1 = readlineSync.question(historyQuestions[randomQuestion].question);
			if (question1 === historyQuestions[randomQuestion].answer) {
				console.log('You are totally correct!!');
				points++;
			} else {
				console.log('Sorry, wrong answer');
			}
		}
		if (categories[index] == categories[1]) {
			question2 = readlineSync.question('Which team has the most NBA titles? ');
			// let points2 = 1;
			if (question2 === 'Boston Celtics') {
				console.log('You are totally correct!!');
				points++;
			} else {
				console.log('Sorry, wrong answer');
			}
		}
		if (categories[index] == categories[2]) {
			question3 = readlineSync.question('Which is the biggest island in the world? ');
			if (question3 === 'Australia') {
				console.log('You are totally correct!!');
				points++;
			} else {
				console.log('Sorry, wrong 	answer');
			}
		}
		if (categories[index] == categories[3]) {
			question4 = readlineSync.question('Which one is the closest planet to the Sun? ');
			if (question4 === 'Mercury') {
				console.log('You are totally correct!!');
				points++;
			} else {
				console.log('Sorry, wrong answer');
			}
		}
		if (categories[index] == categories[4]) {
			question5 = readlineSync.question('What company did Michael Scott worked for? ');
			if (question5 === 'Dunder Mifflin') {
				console.log('You are totally correct!!');
				points++;
			} else {
				console.log('Sorry, wrong answer');
			}
		}
	}
};
const totalPoints = () => {
	console.log('You have a total of ' + points + ' answers right');
};
pickedCategory();
totalPoints();
