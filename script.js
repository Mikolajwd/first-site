console.log("..................it's me, your first site..............");

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

// const test =  document.getElementById("item");
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

// const test1 = document.getElementsByTagName("ul");
// console.log(test1);

// const test2 = document.getElementById("item");
// console.log(test2);

// const test3 = document.getElementsByClassName("liClass");
// console.log(test3);

// const test4 = document.getElementsByTagName("li");
// console.log(test4);

// const head = document.querySelector("h1");
// console.log(head);

// const parag = document.querySelectorAll("p");
// console.log(parag);

// const div_class = document.querySelector("div.test");
// console.log(div_class);

// const id_test = div_class.querySelector("#test");
// console.log(id_test);
// ___________________
// apend child

// const ulList = document.createElement("ul");
// const liItem = document.createElement("li");
// liItem.textContent = "hejo";

// document.body.appendChild(ulList);
// ulList.appendChild(liItem);

// const div_1 = document.querySelector("div.div1");
// console.log(div_1);

// const add_P = document.createElement("add_P");
// add_P.textContent = " & jestem pharagraf";
// div_1.appendChild(add_P);

// const div = document.querySelector("div");
// const p = document.createElement("p");
// const h2 = document.createElement("h2");
// p.textContent = "Paragraph";
// h2.textContent = "to jest nagłówek H2";

// div.appendChild(p);
// div.appendChild(h2);

// console.log(document.body);
// ____________________________
// inerHTML, OuterHTML,

// const btn = document.querySelector("button");

// btn.outerHTML = "<p>hejo</p>";
// // console.log(btn);

// // btn.innerHTML = "";
// console.log(btn);
// --------------

// const innerT = document.querySelector(".inner-text");
// const textC = document.querySelector(".text-content");

// console.log(innerT.innerText);
// console.log(textC.textContentпше );

// ___________________
// remove child

// const div_1 = document.querySelector(".div_01");
// const h1_01 = document.querySelector("h1");
// console.log(div_1);

// div_1.removeChild(h1_01);
// _______________
// addEventListener;

// const btn1 = document.querySelector(".btn-1");
// const btn2 = document.querySelector(".btn-2");
// const btn3 = document.querySelector(".btn-3");

// btn1.addEventListener("click", function () {
// 	console.log("kliknięto mnie");
// });

// btn2.addEventListener("mouseover", () => {
// 	console.log("najechano na mnie");
// });

// const n_click = () => {
// 	console.log("clicknięno duble click");
// };

// btn3.addEventListener("dblclick", n_click);

// const btns = document.querySelectorAll("button");
// console.log(btns);

// const smile = () => {
// 	console.log("=)))");
// };

// btns.forEach(btn => btn.addEventListener("click", smile));

// ____________________
// e target

// const btn = document.querySelector("button");

// const test = e => {
// 	console.log(e);
// 	console.log(e.target.classList);
// 	console.log(e.target.offsetTop);
// };

// btn.addEventListener("click", test);

// ________________________
// Bubbling & Capturing

// const lime = document.querySelector('.circle_lime')
// const blue = document.querySelector('.circle_blue')
// const gold = document.querySelector('.circle_gold')

// const infoLime = () => {
//     console.log('%clime', 'color: lime; text-transform: uppercase' );
// }
// const infoBlue = () => {
//     console.log('%cblue', 'color: blue; text-transform: uppercase' );
// }
// const infoGold = () => {
//     console.log('%cgold', 'color: gold; text-transform: uppercase' );
// }

// lime.addEventListener('click', infoLime, {capture: false})
// lime.addEventListener('click', infoBlue)
// lime.addEventListener('click', infoGold)

// _____________________________
// Stop Propagation

// const lime = document.querySelector(".circle_lime");
// const blue = document.querySelector(".circle_blue");
// const gold = document.querySelector(".circle_gold");

// const infoLime = () => {
// 	console.log("%clime", "color: lime; text-transform: uppercase");
// };
// const infoBlue = () => {
// 	console.log(
// 		"%cten kod nie musiał się wykonywać",
// 		"color: blue; text-transform: uppercase"
// 	);
// };
// const infoGold = e => {
// 	e.stopPropagation();
// 	console.log("%cwykonuje jakiś kod", "color: gold; text-transform: uppercase");
// };

// lime.addEventListener("click", infoBlue);
// lime.addEventListener("click", infoGold);

// ________________________
// Delegacja zdarzeń

// const allCircles = document.querySelectorAll(".circle");
// const gold = document.querySelector(".gold");
// const lime = document.querySelector(".lime");

// allCircles.forEach(circle =>
// 	circle.addEventListener("click", () => console.log(circle))
// );

// const new_Circle = document.createElement("div");
// new_Circle.classList.add('circle', 'purple')
// gold.append(new_Circle);

// dynamicznie dodane elementy, widoczne tylko w nodeliscie, ponieważ nie użyliśmy getElementByTagName, wówczas tego nie użyliśmy poniważ w tedy bym nie mieli możliwości użyć forEach przy użyciu tej metoddy

// ____________________
// Delegacja zdarzeń p2

// const allCircles = document.querySelectorAll(".circle");
// const gold = document.querySelector(".gold");
// const lime = document.querySelector(".lime");

// // allCircles.forEach(circle =>
// // 	circle.addEventListener("click", () => console.log(circle))
// // );

// const new_Circle = document.createElement("div");
// new_Circle.classList.add("circle", "purple");
// gold.append(new_Circle);

// lime.addEventListener("click", e => {
// 	// if (e.target.matches(".circle_2")) {
// 	if (e.target.classList.contains("circle_2")) {
// 		console.log(e.target);
// 	}
// });
// __________________
// dodawanie i usuwanie class

// const addBtn = document.querySelector(".add");
// const removeBtn = document.querySelector(".remove");
// const toggleBtn = document.querySelector(".toggle");
// const text = document.querySelector("p");

// const addClass = () => {
// 	text.classList.add("test");
// };
// addBtn.addEventListener("click", addClass);

// const removeClass = () => {
// 	text.classList.remove("test");
// };
// removeBtn.addEventListener("click", removeClass);

// const toggleClass = () => {
// 	text.classList.toggle("test");
// };
// toggleBtn.addEventListener("click", toggleClass);
// ____________________________
// zadanie nr1 stwórz listę i modyfikuj ją

// const div = document.querySelector("div");
// const ulList = document.createElement("ul");
// div.append(ulList);

// for (let i = 1; i < 11; i++) {
// 	const liItem = document.createElement("li");
// 	liItem.textContent = i;
// 	ulList.append(liItem);
// }

// console.log(ulList);

// const lastLi = ulList.querySelector("li:last-child");
// console.log(lastLi);
// lastLi.textContent = "Jestem ostatnim elementem";

// lastLi.style.fontSize = "24px";
// lastLi.style.backgroundColor = "royalBlue";
// lastLi.style.padding = "20px 40px";
// // lastLi.style.color = "white";

// __________________
// zadanie nr 2

// // 2. Pobierz w JS paragrafy, przyciski oraz DIV-a square.

// const par1 = document.querySelector(".p1");
// const par2 = document.querySelector(".p2.show");
// const btn1 = document.querySelector(".btn.btn1");
// const btn2 = document.querySelector(".btn.btn2");
// const square = document.querySelector(".square");

// console.log(square);

// // 3. Stwórz funkcje:

// // #1: wyloguj w konsoli napisz "cześć",

// const hej = () => {
// 	console.log("Cześć");
// };

// // #2: zmień kolor .square na czerwony

// const changeRed = () => {
// 	square.style.backgroundColor = "red";
// };

// // #3: zmień kolor square na niebieski ,

// const changeBlue = () => {
// 	square.style.backgroundColor = "blue";
// };

// // #4: najpierw dodaj klasę .show do "Paragrafu 1" i usuń klasę .show z "Paragrafu 2", potem zrób na odwrót // (przełącznik do światła).

// // const changeClassPar1 = () => {
// // 	par1.classList.add("show");
// // 	par2.classList.remove("show");
// // };
// const toggleClassPar2 = () => {
// 	par1.classList.toggle("show");
// 	par2.classList.toggle("show");
// };

// btn1.addEventListener("dblclick", hej);
// btn2.addEventListener("click", toggleClassPar2);
// square.addEventListener("mouseover", changeRed);
// square.addEventListener("mouseout", changeBlue);

// // changeClassPar1();

// // 4. Funkcje mają być odpalane za pomocą:
// // #1 podwójnego kliknięcia przycisku z burgerem,
// // #2 wjechania myszą na DIV.square,
// // #3 zjechania myszą z DIV.square,
// // #4 kliknięcia w przycisk z pizzą.

// ______________________
// setTimeout & setInterval

// const test = () => {
// 	console.log("hello");
// };

// setInterval(test, 2000);

// setTimeout(test, 2000)

// ____________________
// alert, confirm, prompt

// alert("uwaga zagrożenie dla twoich oczy");

// confirm("czy potwierdzisz?");

// const name = prompt("wpiszesz swoje imię?");
// alert(`witaj ${name}`);

// _____________________
// Obiekt math

// console.log(Math.PI);

// const number = Math.random() * 10;

// console.log(Math.floor(number));
// _____________________
// atrybuty

// const link = document.querySelector('a')
// const img = document.querySelector('img')
// const p = document.querySelector('p')

// link.setAttribute('href', '#')
// link.setAttribute('target', '_blank')
// dodaje / ustawia nowy atrybut i przepisuje do niego wartość


// console.log(img.getAttribute('alt'));
// pobira wartość, która jest przepisana do danego atrybutu

// console.log(p.hasAttribute('style'));
// sprawdza czy mamy jakiś atrybut

// p.removeAttribute('style')
// usuwa wskazany atrybut z DOM

// _______________________--
// data atrybuty

// const div = document.querySelector('.div')
// console.log(div);

// const divAt = document.querySelector('[data-number="23"]')
// console.log(divAt);

// console.log(divAt.dataset);
// console.log(divAt.dataset.moreInfo);

// _______________________--
// zadanie nr1

// const img = document.querySelector('img')
// img.setAttribute('src', 'https://unsplash.it/600/400')
// img.setAttribute('alt', 'losowy obrazek z interneu')


// const coKolwiek = () => {
//     console.log("hej jestem function");
// //     }

// //     setTimeout(coKolwiek, 5000)

// // _____________________-
// // zadadnie nr2.
// const liItems = document.querySelectorAll('li')
// let number = 1

// for(const liItem of liItems) {
//     liItem.textContent = number
//     liItem.dataset.id = number
//     number++
// }

// const thirdLi = document.querySelector('[data-id="3"]')
// console.log(thirdLi);
// console.log(thirdLi.closest('.wrapper'));

// data atrybuty powtórka z rozrywki

// const div = document.querySelector('div')
// console.log(div);


// _________________________________
// OBJEKTY

// const myObject = {
//     key: value,
//     key: value,
//     key: value
// }


// dodanie objekta w objekcie___________

// const newUser = {
//     name: 'Lisa',
//     age: 23,
//     car: {
//         brand: 'audi',
//         model: 'a3',
//         color: 'czarny',
//         sound: () => {
//             console.log('wrum, wrum');
//         }
//     }
// }

// console.log(newUser.name);
// console.log(newUser.age);

// console.log(`${newUser.name} jeździ samochodem marki ${newUser.car.brand}, kolor ${newUser.car.color}, która robie`);

// console.log(newUser.car.sound())

const car = {
    marka: 'BMW',
    model: '3 seria', 
    rok: 1998,
    kolor: 'czerwohny',
    silnik: {
        model: 'n47',
        wtrysk: 'pośredni',
        zawory: 16,
        tloki: 4,
        rozrad: 'lancuch',
        egr: true,
        dpf: false,
        kat: {
            pogrz: true,
            poj: '200-300',
            przelot: true,
            podwojny: false
        }
}

}


car.silnik.rokProd = 1995
car.silnik.kat.iloscTi = '1348gr'
car.silnik.kat['kat-masa-wlasna'] = '2500 gr'
car.silnik.kat['kat-prepust'] = '200 kg/min'
console.log(car);