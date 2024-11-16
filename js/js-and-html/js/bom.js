// Об'єкти BOM 

// window - це глобальний обʼєкт, який представляє вікно браузера

// Виводимо поточну ширину екрану 
console.log(window.innerWidth);

// Виводимо поточну висоту екрану
console.log(window.innerHeight);

// Відкриваємо нову вкладу або спливаюче вікно
// window.open('https://github.com/dimaa21');

// Вспливаюче вікно
// window.open('https://github.com/dimaa21');

// Вспливаюче вікно з нашими параметрами 
// window.open("about:blank", "hello", "width=200,height=200");

// navigator — надає інформацію про браузер і операційну систему
console.log(navigator.platform);

// location — дозволяє працювати з URL-адресою сторінки
// console.log(location.href);

// location.reload() — перезавантажує сторінку
// setTimeout(function() {
//    location.reload();
// }, 2000);

// Змінити текст у заголовку
function changeHeadingText() {
    document.querySelector('h1').textContent = 'Заголовок змінено!';
}

// Виділити всі параграфи червоним кольором
function highlightParagraphs() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.style.color = 'red';
    });
}

