//1. Вычислить факториал числа n. n - рандом от 1 до 15
//2. Вывести таблицу значений функции y = -0.23x
//2 + x. Значения аргумента (x) задаются
//минимумом, максимумом и шагом. (как вариант, ещё и попробовать нарисовать в
//консоли)
//3. Найти сумму и произведение цифр введенного натурального числа. число - рандом от
//10000 до 100000000
//4. Докажите, что для множества натуральных чисел верно 1+2+...+n = n(n+1)/2
//5. Вывести на экран столько элементов ряда Фибоначчи, сколько указал пользователь.
//Например, если на ввод поступило число 6, то вывод должен содержать шесть первых
//чисел ряда Фибоначчи: 1 2 3 5 8 13.
/* ряд фибоначчи начинается  с двух единиц */
function fibonacciCounter (num) {
	let arr = [];
	for (let x = 1; x <= num; x++) {
		console.log
	}
}
//Ряд Фибоначчи - это последовательность натуральных чисел, где каждое последующее
//число является суммой двух предыдущих: 1 1 2 3 5 8 13 21 34 55 89 ...
//Одномерные массивы
//1. Задан массив из 20 элементов (рандом от -100 до 100). Найти наибольший элемент
//массива и его индекс
function findTheBiggestNumber (arr) {
	let biggestNumber = arr[0];
	let biggestNumberIndex = 0;
	for (let b = 1; b < arr.length; b++) {
		if (biggestNumber < arr[b]) {
			biggestNumber = arr[b];
			biggestNumberIndex = b;
		}
	}
	console.log(`The biggest number is: ${biggestNumber}`);
	console.log(`The biggest number index is: ${biggestNumberIndex}`)
}
//2. Сделать реверс массива (расположить элементы массива в обратном направлении - не
//вернуть новый массив, а поменять именно в исходном)

function arrayReverser (arr) {
	for (let index = 0; index < arr.length / 2; index++) {
		let a = arr[index];
		let z = arr[arr.length-1-index];
		arr[arr.length-1-index] = a;
		arr[index] = z;
	}
	console.log(arr)
}
//3. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4,
//результат 3 4 1 2. Если в массиве кол-во элементов нечётное (1 2 3 4 5), “средний”
//элемент оставить на своём месте: 4 5 3 1 2
function arrayHalfSwitcher (arr) {

}
//4. Найти в массиве те элементы, значение которых меньше среднего арифметического,
//взятого от всех элементов массива.
function lessThanAverageChecker(arr) {
	let sum = 0;
	for (let x of arr) {
		sum += x
	}
	
	let average = sum / arr.length;
	let lessThanAverage = [];
	
	for (let y of arr) {
		if (y < average) { lessThanAverage.push(y) }
	}
	return lessThanAverage
}
//5. В массиве найти сумму элементов, находящихся между минимальным и максимальным
//элементами. Сами минимальный и максимальный элементы в сумму не включать.

/* у меня получается, что считается первое вхождение,
если есть элементы с одинаковыми значениями*/

function betweenMinAndMax(arr) {
	let min = arr[0];
	let minIndex = 0;
	for (let a = 1; a < arr.length; a++) {
		if ( min > arr[a] ) { 
			min = arr[a]; 
			minIndex = a
		}
	}
	
	let max = arr[0];
	let maxIndex = 0;
	for (let a = 1; a < arr.length; a++) {
		if ( max < arr[a] ) { 
			max = arr[a]; 
			maxIndex = a
		}
	}
	
	let sum = 0;
	if (maxIndex < minIndex) {
		for (let x = maxIndex + 1; x < minIndex; x++)
		{
			sum = sum + arr[x]
		}
	}
	else {
		for (let x = minIndex + 1; x < maxIndex; x++)
		{
			sum = sum + arr[x]
		}
	}
	
	console.log(sum)
}