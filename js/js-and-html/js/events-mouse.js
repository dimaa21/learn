let text = document.querySelector(".full-text");

text.onkeydown = function(e) {
    console.log("onkeydown: " + e.key);
}

text.onkeypress = function(e) {
    console.log("onkeypress: " + e.key);
}

text.onkeyup = function(e) {
    console.log("onkeyup: " + e.key);
}

let boldText = document.querySelector("p > b.bold-txt");

boldText.onmousedown = function() {
    boldText.style.color = "red";
};

boldText.onmouseup = function() {
    boldText.style.color = "blue";
};

let inputField = document.querySelector('.input');
let helpField = document.querySelector('.hint');

inputField.onmouseenter = function() {
    helpField.style.display = 'block';
};

inputField.onmousemove = function(e) {
    helpField.style.left = e.offsetX + "px";
    helpField.style.top = e.offsetY + "px";
};

inputField.onmouseleave = function() {
    helpField.style.display = 'none';
};