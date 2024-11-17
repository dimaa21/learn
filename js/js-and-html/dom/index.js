// document - це основний елемент,
// через який можна звернатись до інших елементів

// document - тег html

console.log(document.head);

// Функції для дочірних елементів 

console.log(document.body.lastChild);

// for (var i = 0; i < document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[i]);
// }

// Вибір елементів по ID 
let content = document.getElementById("content");

console.log(content);

// Вибір елементів по тегу

document.getElementsByTagName("div");