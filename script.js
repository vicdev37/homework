'use strict'; 

let money = prompt("Ваш бюджет на месяц?"),
		time = prompt("Введите дату в формате YYYY-MM-DD");	
		console.log(money);
		console.log(time);
const days = 30;		

let appData = {
	budget: money,
	timeData: time,
	expenses: {
		first: "ответ на первый вопрос: ", 
		second: "ответ на второй вопрос: "
	},
	optionalExpenses: {

	},
	income: [

	],
	savings: false
};



let answerA = prompt("Введите обязательную статью расходов в этом месяце"),
		answerB = prompt("Во сколько обойдется?"),
		answerC = prompt("Введите обязательную статью расходов в этом месяце"),
		answerD = prompt("Во сколько обойдется?")
console.log(appData.expenses.first + answerA);
console.log(appData.expenses.second + answerB);
console.log(appData.expenses.first + answerC);
console.log(appData.expenses.second + answerD);

alert("Ваш бюджет на 1 день: " + money / days + " рублей");







