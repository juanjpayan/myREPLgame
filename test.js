const readlineSync = require('readline-sync');

console.log(`LET'S PLAY SOME TRIVIA!!!`);

let categories = [ 'history', 'sports', 'geography', 'science', 'popCulture' ];

let question1;
let question2;
let question3;
let question4;
let question5;

const pickedCategory = () => {
	for (let i = 0; i < 5; i++) {
		let index = readlineSync.keyInSelect(categories, 'Pick your category');
		console.log('You have picked ' + categories[index]);
		if (categories[index] == categories[0]) {
			let question1 = readlineSync.question('What year was the US Constitution signed? ');
			if (question1 === 1787) {
				console.log('You are totally correct!!');
			} else {
				console.log('Sorry, wrong answer');
			}
		}
		if (categories[index] == categories[1]) {
			let question2 = readlineSync.question('Which team has the most NBA titles? ');
			if (question2 === 'Boston Celtics') {
				console.log('You are totally correct!!');
			} else {
				console.log('Sorry, wrong answer');
			}
		}
		if (categories[index] == categories[2]) {
			let question3 = readlineSync.question('Which is the biggest island in the world? ');
			if (question3 === 'Australia') {
				console.log('You are totally correct!!');
			} else {
				console.log('Sorry, wrong answer');
			}
		}
		if (categories[index] == categories[3]) {
			let question4 = readlineSync.question('Which one is the closest planet to the Sun? ');
			if (question4 === 'Mercury') {
				console.log('You are totally correct!!');
			} else {
				console.log('Sorry, wrong answer');
			}
		}
	}
	if (categories[index] == categories[4]) {
		let question5 = readlineSync.question('What company did Michael Scott worked for? ');
		if (question5 === 'Dunder Mifflin') {
			console.log('You are totally correct!!');
		} else {
			console.log('Sorry, wrong answer');
		}
	}
};
pickedCategory();
