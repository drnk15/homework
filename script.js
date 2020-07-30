// 1. Поменять местами значения двух переменных:
function variableSwither(a, b) {
	let c = a;
	a = b;
	b = c;
	console.log(a, b)
}

// 2. Найти длину гипотенузы прямоугольного треугольника:
function hypotenuseCounter(ca1, ca2) {
	return Math.sqrt(ca1 * ca1 + ca2 * ca2)
}

// 3. Вывести уравнение прямой y = k*x + b по координатам двух точек


/* 1. Посчитать выражениме (max(a*b*c, a+b+c) + 3). 
a, b, c - рандом от -10 до 10.*/

function countTheBiggest (a, b, c) {
	return Math.max(a*b*c, a+b+c) + 3
}

/* 2. Вводятся два целых числа (от -100 до 100). 
Проверить, делится ли 1-е на 2-е, вывести об этом сообщение, 
а также частное и остаток.*/

function divisionChecker(c, d) {
	if (d === 0) {alert("На ноль делить нельзя!")}
	else if (c % d) {alert("Результат деления: " + Math.round(c / d) + " Остаток: " + c % d)}
	else {alert("Результат деления: " + c / d)}
}

/* 3. Определить, какой четверти принадлежат точки с координатами (x, y).
X, y от -10 до 10.*/

function cornerDefiner (x, y) {
	if (x > 0 && y > 0) { alert("The point belongs to the 1st corner") }
	else if (x < 0 && y > 0) { alert("The point belongs to the 2nd corner") }
	else if (x < 0 && y < 0) { alert("The point belongs to the 3rd corner") }
	else if (x > 0 && y < 0) { alert("The point belongs to the 4th corner") }
	else if (x === 0 && y === 0) { alert("This is the start of coordinates system") }
	else { alert("I don't know") }
}

/* 4. Определить принадлежность точки кругу с центром в начале координат:
вводятся координаты (x, y) точки и радиус круга (r). 
X, y от -15 до 15, r от -10 до 10.*/

function pointInRoundChecker (x, y, r) {
	x ** 2 + y ** 2 === r ** 2 ? alert("The point belongs to this round") : alert("The point doesn't belong to this round")
}

// 5. Вычислить корни квадратного уравнения