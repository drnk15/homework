//1. ��������� ��������� ����� n. n - ������ �� 1 �� 15
//2. ������� ������� �������� ������� y = -0.23x
//2 + x. �������� ��������� (x) ��������
//���������, ���������� � �����. (��� �������, ��� � ����������� ���������� �
//�������)
//3. ����� ����� � ������������ ���� ���������� ������������ �����. ����� - ������ ��
//10000 �� 100000000
//4. ��������, ��� ��� ��������� ����������� ����� ����� 1+2+...+n = n(n+1)/2
//5. ������� �� ����� ������� ��������� ���� ���������, ������� ������ ������������.
//��������, ���� �� ���� ��������� ����� 6, �� ����� ������ ��������� ����� ������
//����� ���� ���������: 1 2 3 5 8 13.
/* ��� ��������� ����������  � ���� ������ */
function fibonacciCounter (num) {
	let arr = [];
	for (let x = 1; x <= num; x++) {
		console.log
	}
}
//��� ��������� - ��� ������������������ ����������� �����, ��� ������ �����������
//����� �������� ������ ���� ����������: 1 1 2 3 5 8 13 21 34 55 89 ...
//���������� �������
//1. ����� ������ �� 20 ��������� (������ �� -100 �� 100). ����� ���������� �������
//������� � ��� ������
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
//2. ������� ������ ������� (����������� �������� ������� � �������� ����������� - ��
//������� ����� ������, � �������� ������ � ��������)

function arrayReverser (arr) {
	for (let index = 0; index < arr.length / 2; index++) {
		let a = arr[index];
		let z = arr[arr.length-1-index];
		arr[arr.length-1-index] = a;
		arr[index] = z;
	}
	console.log(arr)
}
//3. �������� ������� ������ � ������ �������� �������, ��������, ��� ������� 1 2 3 4,
//��������� 3 4 1 2. ���� � ������� ���-�� ��������� �������� (1 2 3 4 5), ��������
//������� �������� �� ���� �����: 4 5 3 1 2
function arrayHalfSwitcher (arr) {

}
//4. ����� � ������� �� ��������, �������� ������� ������ �������� ���������������,
//������� �� ���� ��������� �������.
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
//5. � ������� ����� ����� ���������, ����������� ����� ����������� � ������������
//����������. ���� ����������� � ������������ �������� � ����� �� ��������.

/* � ���� ����������, ��� ��������� ������ ���������,
���� ���� �������� � ����������� ����������*/

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