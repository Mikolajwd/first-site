// console.log("hi mordo");

// const num = [1, 2, 4, 6];

// console.log(num);

// const mapNum = num.map(function (num) {
// 	return num * 2;
// });
// console.log(mapNum);

// ____________________________ function

// function test() {
// 	console.log("czesc");
// }
// test();

// const helloWorld = function () {
// 	console.log("hello World");
// };
// helloWorld();

// _____________________ deklaracja

// const goin = param => console.log("hej jestem " + param);

// goin("kogutem");

// ___________________
// Callback

// const names = ["lisa", "adam", "patryk"];

// // const bigNames = names.map(showBigName);
// // console.log(bigNames);

// const showBigName = name => {
// 	name.map(name.toUpperCase());
// };
// names.map(showBigName);
//  ______________________
// zadanko #1

// let score

// const add = (x, y) => {
// 	score = x + y;
// 	console.log(score);

// 	const func1 = () => console.log(`liczba ${score} jest parzysta`);
// 	const func2 = () => console.log(`liczba ${score} jest nie parzysta`);
// 	console.log(score % 2);
// 	score % 2 == 0 ? func1() : func2();
// };

// add(2, 2);

// ___________________
// zazdanko #2

// let cels;
// let temp;

// const far = cels => {temp = cels * 1.8 + 32;
// console.log(`${cels} celiusz równa się ${temp} farhenhit`);
// }
// far(33);

// ________________
// zadanko #3

// let num = 10;
// let numbers = [];

// for (let i = 0; i < num; i++) {
// 	numbers.push(i);
// }
// // console.log(numbers);
// const func = number => {
// 	if ((number % 3 === 0) & (number !== 0)) {
// 		console.log(`${number} liczba jest dzielona prze 3`);
// 	} else {
// 		console.log(`${number} liczba NIE jest dzielona prze 3 lub jest 0`);
// 	}
// };

// numbers.forEach(func);

// ______________________
// DOM getElemtntById

// const test = document.getElementById("item");
// console.log(test);

// const test2 = document.getElementsByTagName("li");
// console.log(test2);

// const test3 = document.getElementsByClassName("liClass");

// console.log(test3);
// ____________________
// querySelector

// const test = document.querySelector("li");
// console.log(test);
// const ulList = document.querySelector("ul");
// console.log(ulList);
// const onceUllist = ulList.querySelectorAll(" .liClass");
// console.log(onceUllist);

// _________________________
// zadanie z pobierania elementów

const head = document.querySelector("h1");
console.log(head);

const parag = document.querySelectorAll("p");
console.log(parag);

const div_class = document.querySelector("div.test");
console.log(div_class);

const id_test = div_class.querySelector("#test");
console.log(id_test);
