let x = 20;
let y = 20;

let hasCar = false;

if(x > y) {
  console.log("Число Х больше чем число У");
  console.log("Проверка");
} else if(x == y) {
  console.log("Числа равные");

  if(x != 24 || (!hasCar && y == 24))
    console.log("Число Х не равно 24");

} else if(x == 20)
  console.log("Число Х равно 20");
else if(x == 26)
  console.log("Число Х равно 26");
else
  console.log("Числа не равны");

let str = "Some-2";
switch(str) {
  case "John":
    console.log("Имя John");
    break;
  case "Bob":
    console.log("Имя Bob");
    break;
  case "George":
    console.log("Имя George");
    break;
  case "Petr":
    console.log("Имя Petr");
    break;
  case "Alex":
    console.log("Имя Alex");
    break;

  case "Some-1":
  case "Some-2":
  case "Some-3":
  case "Some-4":
    console.log("Имя Some");
    break;

  default:
    console.log("Нам не известно имя");
    break;
}

let nums = 26;

let res = "";
if(nums > 25)
  res = "Big";
else
  res = "Small";

console.log(res);

let result = nums > 25 ? "Big" : "Small";
console.log(result);
