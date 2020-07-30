// 1. �������� ������� �������� ���� ����������:
function variableSwither(a, b) {
	let c = a;
	a = b;
	b = c;
	console.log(a, b)
}

// 2. ����� ����� ���������� �������������� ������������:
function hypotenuseCounter(ca1, ca2) {
	return Math.sqrt(ca1 * ca1 + ca2 * ca2)
}

// 3. ������� ��������� ������ y = k*x + b �� ����������� ���� �����


/* 1. ��������� ���������� (max(a*b*c, a+b+c) + 3). 
a, b, c - ������ �� -10 �� 10.*/

function countTheBiggest (a, b, c) {
	return Math.max(a*b*c, a+b+c) + 3
}

/* 2. �������� ��� ����� ����� (�� -100 �� 100). 
���������, ������� �� 1-� �� 2-�, ������� �� ���� ���������, 
� ����� ������� � �������.*/

function divisionChecker(c, d) {
	if (d === 0) {alert("�� ���� ������ ������!")}
	else if (c % d) {alert("��������� �������: " + Math.round(c / d) + " �������: " + c % d)}
	else {alert("��������� �������: " + c / d)}
}

/* 3. ����������, ����� �������� ����������� ����� � ������������ (x, y).
X, y �� -10 �� 10.*/

function cornerDefiner (x, y) {
	if (x > 0 && y > 0) { alert("The point belongs to the 1st corner") }
	else if (x < 0 && y > 0) { alert("The point belongs to the 2nd corner") }
	else if (x < 0 && y < 0) { alert("The point belongs to the 3rd corner") }
	else if (x > 0 && y < 0) { alert("The point belongs to the 4th corner") }
	else if (x === 0 && y === 0) { alert("This is the start of coordinates system") }
	else { alert("I don't know") }
}

/* 4. ���������� �������������� ����� ����� � ������� � ������ ���������:
�������� ���������� (x, y) ����� � ������ ����� (r). 
X, y �� -15 �� 15, r �� -10 �� 10.*/

function pointInRoundChecker (x, y, r) {
	x ** 2 + y ** 2 === r ** 2 ? alert("The point belongs to this round") : alert("The point doesn't belong to this round")
}

// 5. ��������� ����� ����������� ���������