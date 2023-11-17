let arr = ["BMW", "Mercedes", "Audi", "Volvo"];

let nums = [1, 2, 3, 4, 5];

let summa = nums.reduce(function(sum, el) {
  return sum + el;
}, 0);

console.log(summa);

let currency = [];
let average = currency.reduceRight(function(total, el, index, array) {
  total += el;
  if(index === 0)
    return total / array.length;
  else
    return total;
}, 10);
console.log(average);

/* arr.forEach(function(item, i, arr) {
  console.log("Index: " + i + ": " + item + ". Массив: " + arr);
}); */

/* let newArr = arr.filter(function(el) {
  return el.length == 3 || el.length == 4;
}); */
// console.log(newArr);

/* let newArr = arr.map(function(el) {
  return el.toLowerCase();
}); */
// console.log(newArr);

/* function elLength(el) {
  return el.length > 2;
}
console.log(arr.every(elLength));
console.log(arr.some(elLength)); */
