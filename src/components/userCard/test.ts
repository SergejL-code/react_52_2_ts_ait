// function sum(a, b) {
//   return a + b;
// }
// sum(120, 12);
// sum("red", "green");

// function add(first, second) {
//   return first + second;
// }

function component(props) {
  console.log("переданное имя -", props.name);
  return props.name;
}

let peter = component({ age: 35, name: "Peter" });
let rosa = component({ age: 40, name: "Rosa" });

console.log(peter);
console.log(rosa);
// * мы хотим разделить значения объекта на 'кусочки' и положить их в переменные для дальнейшего использования

const car = { brand: "BMW", model: "X5", isNew: true };

// * первый способ долгий
// const brand = car.brand
// const model = car.model
// const isNew = car.isNew

// * второй короткий с деструктуризацией
//isNew:isModelNew ---переименования ключа
const { brand, model, isNew: isModelNew } = car;

console.log(brand, model, isModelNew);
