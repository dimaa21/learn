// Task #1 

/* Дано число. Перевірте, від'ємне воно чи ні. 
Виведіть про це інформацію в консоль. */

let num1 = '2'; 

if (num1 < 0) {
    console.log('Число від\'ємне');
} else {
    console.log ('Число додатнє');
}

//  Task #2  
/* Дано рядок. 
Виведіть у консоль довжину цього рядка. */ 

let word = 'war3432432';

console.log('Кількість букв в змінній word: ' + word.length);

// Task #3
/* Дано рядок. 
Виведіть у консоль останній символ рядка. */

console.log('Останній символ в змінній word: ' + word[word.length - 1]);

// Task #4 
/* Дано число. 
Перевірте, парне воно чи ні. */

let num2 = 10;

if (num2 % 2 === 0) {
    console.log('Число парне');
} else {
    console.log('Число непарне');
}

// Task #5
/* Дано два слова.
Перевірте, що перші літери цих слів збігаються. */


let word1 = 'hello';
let word2 = 'horld';

if (word1[0] === word2[0]) {
    console.log('Перші літери слів збігаються');
} else {
    console.log('Перші літери слів не збігаються');
}

// Task #6 
/*
Дано слово. Отримайте його останню букву. 
Якщо слово закінчується на м'який знак, 
то отримайте передостанню букву. 
*/

let word3 = 'javascript';

if (word3[word3.length - 1] === 's') {
    console.log('Остання буква слова: ' + word3[word3.length - 2]);
} else {
    console.log('Остання буква слова: ' + word3[word3.length - 1]);
}

// Task #7
/* Дано число. Виведіть 
у консоль першу цифру цього числа. */

let num3 = 12345;

console.log('Перша цифра в змінній num3: ' + String(num3)[0]);

// Task #8