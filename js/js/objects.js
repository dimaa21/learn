let car = {
  marka: "Volvo",
  color: "Белый",
  type: "sedan",
  speed: 250,
  fuel: 50,
  isNew: true,
  passengers: ["Alex", "Bob", "John"]
};

console.log(car["fuel"]);
console.log("");

for(let key in car) {
  console.log("Элемент по ключу " + key + ": " + car[key]);
}

// function Car(marka, color, type, speed) {
//   this.marka = marka;
//   this.color = color;
//   this.type = type;
//   this.speed = speed;
// }

class Car {
  constructor(marka, color, type, speed) {
    this.marka = marka;
    this.color = color;
    this.type = type;
    this.speed = speed;
  }

  info() {
    console.log("Марка: " + this.marka + ", цвет: " + this.color + ", тип: " + this.type + ", скорость: " + this.speed);
  }
}

let bmw = new Car("M3", "Синий", "Седан", 270);
let volvo = new Car("Volvo", "Белый", "Седан", 230);

bmw.color = "Красный";

bmw.weight = 1800;
console.log(bmw.weight);
console.log(volvo.weight);

bmw.info();
volvo.info();
