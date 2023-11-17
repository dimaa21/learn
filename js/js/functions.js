show();

function show() {
  console.log("Function");
}

function calc(a = 12, b = 10) {
  // if(b == undefined)
  //   b = 10;
  var res = a + b;
  console.log(res);
}

let func = function(mess = "Боб") {
  console.log("Привет: " + mess);
};

func();
func("Алекс");


// calc();
calc(56);
calc(56, 14);

function multiply(a, b, c) {
  var res = a * b * c;
  return res;
}

let mult = multiply(5, 2, 2);
console.log(mult);

function arrayEven(array) {
  let isEven = true;
  array.forEach(function(item, i, arr) {
    if(item % 2 != 0)
      isEven = false;
  });

  return isEven;
}

let arr = [5, 9, 0, 4];
let arr_2 = [6, 8, 0, 4];
let isEven = arrayEven(arr_2);
console.log(isEven);

function test(words) {
  console.log(words);
}

setTimeout(test, 1500, "Hello World");

setTimeout("console.log('Привет')", 1500);

let timeOut = setTimeout(function() {
  console.log('Привет');
}, 1500);
clearTimeout(timeOut);

let interval = setInterval(function() {
  console.log('Привет');
}, 2000);

setTimeout(function() {
  clearInterval(interval);
  console.log('Стоп');
}, 5000);
