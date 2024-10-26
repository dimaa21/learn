// string (Рядок)
const name = 'Dima'; 
const surname = "Haborak";
const surnamename = `Dmytrovuch`;

// Інтерполяція рядків
const message = `${name} ${surname}`

console.log(message);

// number (Число)
const age = 28; 
const posX = 50;
const posY = -100;
const posZ = 1.55; 

const point = (posX + posY + posZ) * 2 / posX

console.log(point);

console.log('Word' / 100)

console.log(100 / 0)

console.log(-100 / 0)


// bigInt(Великі Числа)
console.log(990000000009991n + 1n)
console.log(990000000009992n + 2n)

// boolean (Булеве значення)
const ageChild = 8; 
const isChild = ageChild < 18

console.log(isChild);

// null (Порожнє значення / Нуль)
const data = null; 

// object (Об'єкт)
const user = { 
    login: '123', 
    password: 'qwerty'
};

const numbers = [4, 8, 15, 25, 50]
const map = new Map()
const set = new Set()
const date = new Date()

// typeof - перевірка типу даних 
const Hello = 'Hi'

console.log(
    typeof Hello
)

// перетворення типів даних
const num = 111
const str = '222'
const result = num + str

console.log(result)


//  перетворення типу string
const MyAge = 24

console.log(typeof MyAge)
console.log(typeof String(MyAge))

const power = 9999999; // number (Число)
const sign = Symbol(); // symbol (Символ)
const something = undefined; // undefined (Невизначений)




