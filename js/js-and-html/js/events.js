function clickHref() {
	alert('Hello');
	document.querySelector('a.href').style.display = 'none';
}

function clickText() {
	document.querySelector('p').style.backgroundColor = 'black';
	document.querySelector('p').style.color = '#fff';
}

let input = document.querySelector('input');

function focusEvent() {
	input.style.backgroundColor = '#333';
	input.style.padding = '10px';
	input.style.border = '0px';
}

function focusEndEvent() {
	input.style.backgroundColor = '#fff';
	input.style.padding = '0';
	input.style.border = '3px solid silver';
}