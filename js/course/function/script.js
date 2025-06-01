// Оголошення функції 
function name() {
    
}

function calculateNumber(initialValue) {
    let x = initialValue;
    x = x + 100;
    x = x / 5;

    return x;
}

// Параметр - змінна в круглих дужках функції

function calculateCircleArea(r) {
    let pi = 3.1416;
    let s = pi * r * r;
    return s;
}

 // Аргумент - значення змінної, яке ми передаємо в функцію при виклику

const result = calculateCircleArea(5);
console.log("Площа круга: " + result);


function createHTMLElement(tag, id, text) {
    const element = document.createElement(tag);
    element.id = id;
    element.innerText = text;

    return element;
}

const h1Element = createHTMLElement('h1', 'header1', 'text')
// console.log(h1Element);
document.body.append(h1Element);

function squareNumber(s) {
    let r = s * 4;
    return r;
}

console.log(squareNumber(4));

function greatingName(name) {
    let great = 'Привіт'; 
    let obj = name + '';
    return great;
}

console.log(greatingName('name' + 'Андрій'));