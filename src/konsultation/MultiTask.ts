// 1.

let g = 42;
//g = "Hello";// Тип «строка» не может быть назначен типу «число». Это не явное типизирование.
//2.

let h: string;
h = "TypeScript is awesome!";

//3.

type Age = number;
const myAge: Age = 30;

//4.
const status: string | number = 1;
status = "active";

//5.
type Animal = "cat" | "dog";
type ExtendedAnimal = Animal | "parrot";
const tier: ExtendedAnimal;

//6.
const fruits: string[] = ["apple", "banana"];
//7.
const numbers: number[] = [];
numbers.push(5, 10);
console.log(numbers);

//8.


//9.
//10.
//11.
//12.
//13.
//14.
//15.
//16.
//17.
//18.
//19.
//20.
