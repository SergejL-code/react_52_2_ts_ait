/* eslint-disable prefer-const */
console.log("hello ts");

// пример неявного
// let x = 10;
// x = "text";
//  Как типизировать?
//  Явно vs Неявно
//  Как явно задать тип переменной?
//  При объявлении переменной мы указываем тип:
//  пример явного
// eslint-disable-next-line prefer-const
let y: number = 11;
let p: string;
p = "Welcome to TS";
console.log(y, p);

let isDrunk: boolean = true;
console.log(isDrunk);

// ключевое слово type
// мы можем объявлять типы отдельно:
// типы всегда пишутся с большой буквы
type Age = number;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myAge: Age = 29;

// Union type:   yyyy | xxxx

let k: number | string = 10;
k = "10";
console.log(k);

// Еще примеры union
type Pet = "cat " | "dog";
let petOfAlex: Pet = "cat ";
petOfAlex = "dog";
console.log(petOfAlex);

// Можно расширить union

type ExtendedPet = Pet | "snake";
let myPet: ExtendedPet;
myPet = "snake";
console.log(myPet);

// Еще один пример того же самого
// создание типов:
type Gender = "male" | "female";
type ExtendedGender = Gender | "non-binary person";

// Как типизировать массив стрингов

let fruits: string[] = ["apple", "orange", "mango"];
fruits.push("Ananas");
console.log(fruits);

// особенно важно указывать тип при создании пустого массива
let vegetables: string[] = [];
vegetables.push("carrot");
console.log(vegetables);

// Как типизировать объекты?
// - первый способ - не предпочтительный
// создали тип юзер
type User = {
  firstName: string;
  isAdmin: boolean;
};
const user1: User = {
  firstName: "Alex",
  isAdmin: false,
};
// - второй способ - очень популярный - через интерфейс

interface Monster {
  name: string;
  height: number;
  isAlive: boolean;
  isEvil: boolean;
  hasTentacles: boolean;
}

// создал объект указанного типа

const frankestein: Monster = {
  name: "Frankenstein Monster",
  height: 200,
  isAlive: true,
  isEvil: false,
  hasTentacles: false,
};
console.log(frankestein);

// Когда использовать interface или type:

// Для описания объектов и их расширения предпочтительнее interface.
// Для сложных комбинаций типов или использования примитивов выбирайте type.

// мы можем расширять интерфейсы
// Мы можем создать нового монстра на основании интерфейса Монстра
interface ExtendedMonster extends Monster {
  isFlying: boolean;
}

const dracula: ExtendedMonster = {
  isFlying: true,
  name: "Vlad",
  height: 178,
  isAlive: false,
  isEvil: true,
  hasTentacles: false,
};

// опциональные поля
interface Food {
  title: string;
  isSweet?: boolean;
}
const pancake: Food = {
  title: "Pancakes",
};
// Создать интерфейс город City
// со следующими полями
//  - name
//  - population - число горожан
//  - riversName - опциональное поле название реки -
//  - isTouristic - является ли туристическим или нет
//  - isCapital - является ли столицей

// Создайте несколько объектов для этого интерфейса

// дополнительно сделайте интерфейс - расширяющий город
// например, добавьте дату основания
interface City {
  name: string;
  population: number;
  riversName?: string;
  isTouristic: boolean;
  isCapital: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Stadt_1: City = {
  name: "Aachen",
  population: 2_000_000,
  isTouristic: true,
  isCapital: false,
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Stadt_2: City = {
  name: "Berlin",
  population: 2131354,
  isTouristic: true,
  isCapital: true,
};
interface ExpendedStadt extends City {
  datum: number;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Stadt_3: ExpendedStadt = {
  datum: 1869,
  name: "Ekaterinburg",
  population: 4_000_000,
  isTouristic: true,
  isCapital: false,
};
// Типизация функций
// Что нужно типизировать? Параметры, возвращаемое значение

function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(110, 25));

const dev = (a: number, b: number): number => a / b;
console.log(dev(20, 2));

function toUpper(str: ExtendedPet): string {
  return str.toUpperCase();
}
console.log(toUpper("snake"));
