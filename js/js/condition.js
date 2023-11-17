/* let x = 20;
let y = 20;

let hasCar = true;

// Умови перевірки 
// == - рівність
// != - нерівність 
// > - більше 
// < - менше 
// <= - менше або рівно
// >= - більше або рівно

if(x > y) { // в дужках вказана умова
	console.log('x bigger than y');
	console.log('Peravirka')
} else if(x == y) { // оператор else if спрацює, якщо попередні умови не вірні
	console.log('Числа рівні');

// && логічне І - мають виконуватись дві вказані 
// || логічне або - має виконуватись одна з вказаних умов

	if(x != 24 || hasCar == true || y == 29) // умовні оператори, 
		// можна встроювати в умовні оператори, і в них прописувати умови
		console.log('x is not equal to 24, but y = 29')
} else if(x == 20) { // оператор else if спрацює, якщо попередні умови не вірні
	console.log('Числа X == 20');	
} else if(x == 26) { // оператор else if спрацює, якщо попередні умови не вірні
	console.log('Числа X == 26');
} else  // оператор else спрацьовує, якщо всі попередні умови не вірні
	console.log('Числа не рівні');


// Switch case
let name = 'Some-1';
switch(name) {
	case "John": // якщо змінна = John, буде виконувати код,який знаходиться до оператора break
		console.log('Name John')
		break; // оператор дозволяє вийти з умови
	case "Bob": // якщо змінна = Bob, буде виконувати код,який знаходиться до оператора break
		console.log('Name Bob')
		break; // оператор дозволяє вийти з умови
	case "Dima": // якщо змінна = Dima, буде виконувати код,який знаходиться до оператора break
		console.log('Name Dima')
		break; // оператор дозволяє вийти з умови

	//  перевірка на декілька значень	
	case 'Some-1':
	case 'Some-2':
	case 'Some-3':
	case 'Some-4':
		console.log('Name Some')
		break;

	default: // аналог else
		console.log("Нам невідомо ім'я");
}


// Тернарний оператор
 let nums = 23;

 // Звичайний оператор if else 
 let result = '';
 if(nums > 25)
 	result = 'Big';
 else 
 	result = 'Small';

 console.log(result);
 // Тернарний оператор
 let result2 = nums > 25 ? "Big" : "Small"; 
 console.log(result2); 

 // Завдання 

 // Завдання 1	
// Використовуючи конструкцію if..else, напишіть код, що запитує: ‘Яка “офіційна” назва JavaScript?’
// Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”

 prompt('Яка “офіційна” назва JavaScript?');
 if(prompt == 'ECMAScript') { 
 	alert('Правильно!');
 } else { 
 	alert('Ви не знаєте? ECMAScript!'); 
} 

// Завдання 2
// Використовуючи if..else, напишіть код, що отримує число за допомогою prompt і потім виводить повідомлення alert:
// let num = prompt('Введіть число: ')
if (num >= 1) {
	alert('1')
} else if (num <= -1 ) {
	alert('-1')
} else {
	alert('0')
} 

// Завдання 3
let result = (a + b < 4) ? 'Нижче' : 'Вище'; 
 
// Завдання 4
let message = (login == 'Працівник') ? 'Привіт':
(login == 'Директор') ? 'Вітаю':
''; */





