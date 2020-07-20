const readlineSync = require('readline-sync');

console.log(`LET'S PLAY SOME TRIVIA!!!`);

let categories = [ 'history', 'sports', 'geography', 'science', 'popCulture' ];

let historyQuestions = [
	{
		question: 'From which port did the Titanic sail? ',
		answer: 'Southampton'
	},
	{
		question: 'What year was the US Constitution signed? ',
		answer: '1787'
	},
	{
		question: 'Who did Cleopatra marry after the end of her relationship with Julius Caesar? ',
		answer: 'Mark Anthony'
	}
];

let sportsQuestions = [
	{
		question: 'Which team has the most NBA titles? ',
		answer: 'Boston Celtics'
	},
	{
		question: 'Which year the Miami Dolphins achieved their "perfect season?" ',
		answer: '1972'
	},
	{
		question: 'Who won the soccer World Cup in 2010 in South Africa? ',
		answer: 'Spain'
	}
];

let geographyQuestions = [
	{
		question: 'Which is the biggest island in the world? ',
		answer: 'Australia'
	},
	{
		question: 'Tokyo is the capital city of... ',
		answer: 'Japan'
	},
	{
		question: 'Which is the highest free-standing mountain the world? ',
		answer: 'Mt. Kilimanjaro'
	}
];

let scienceQuestions = [
	{
		question: 'Which one is the closest planet to the Sun? ',
		answer: 'Mercury'
	},
	{
		question: 'How many elements are there in the periodic table? ',
		answer: '118'
	},
	{
		question: 'How many bones do sharks have? ',
		answer: 'zero'
	}
];

let popCultureQuestions = [
	{
		question: 'What company did Michael Scott worked for? ',
		answer: 'Dunder Mifflin'
	},
	{
		question: 'Which pop star is the godmother of both Elton John’s sons? ',
		answer: 'Lady Gaga'
	},
	{
		question: 'What year did Keeping Up with the Kardashians first premiere? ',
		answer: '2017'
	}
];

let randomQuestion = Math.floor(Math.random() * historyQuestions.length);
let randomQuestion1 = Math.floor(Math.random() * sportsQuestions.length);
let randomQuestion2 = Math.floor(Math.random() * geographyQuestions.length);
let randomQuestion3 = Math.floor(Math.random() * scienceQuestions.length);
let randomQuestion4 = Math.floor(Math.random() * popCultureQuestions.length);

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
			question2 = readlineSync.question(sportsQuestions[randomQuestion1].question);
			// let points2 = 1;
			if (question2 === sportsQuestions[randomQuestion1].answer) {
				console.log('You are totally correct!!');
				points++;
			} else {
				console.log('Sorry, wrong answer');
			}
		}
		if (categories[index] == categories[2]) {
			question3 = readlineSync.question(geographyQuestions[randomQuestion2].question);
			if (question3 === geographyQuestions[randomQuestion2].answer) {
				console.log('You are totally correct!!');
				points++;
			} else {
				console.log('Sorry, wrong answer');
			}
		}
		if (categories[index] == categories[3]) {
			question4 = readlineSync.question(scienceQuestions[randomQuestion3].question);
			if (question4 === scienceQuestions[randomQuestion3].answer) {
				console.log('You are totally correct!!');
				points++;
			} else {
				console.log('Sorry, wrong answer');
			}
		}
		if (categories[index] == categories[4]) {
			question5 = readlineSync.question(popCultureQuestions[randomQuestion4].question);
			if (question5 === popCultureQuestions[randomQuestion4].answer) {
				console.log('You are totally correct!!');
				points++;
			} else {
				console.log('Sorry, wrong answer');
			}
		}
	}
};
const totalPoints = () => {
	if (points === 0) {
		console.log("Sorry, you didn't answer any question correctly");
	} else if (points === 1) {
		console.log('You got 1 answer right!');
	} else if (points >= 2 || points <= 4) {
		console.log('You have a total of ' + points + ' answers right');
	} else {
		console.log('Amazing!! You got every question right!');
	}
};
pickedCategory();
totalPoints();

const playAgain = () => {
	// let playAgain = readlineSync.keyInYN('Do you want to play again?');
	if (readlineSync.keyInYN('Do you want to play again?')) {
		pickedCategory();
		totalPoints();
	} else {
		console.log('Thank you for playing!');
	}
};

playAgain();
