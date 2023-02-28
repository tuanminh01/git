// // iterable protocol
// var arr = [1, 2, 4, 6];

// console.log(...arr);
// for (const i of arr) {
//     console.log(i);
// }

// const mapM = new Map();
// mapM.set('a', 1);
// mapM.set('b', 2);
// mapM.set('c', 3);

// console.log(...mapM)

// //Iterable

// function increaseNumber() {
//     let n = 0;
//     return {
//         next: function () {
//             n += 5;
//             return { value: n, done: false };
//         }
//     };
// }
// const newFun = increaseNumber();
// console.log(newFun.next());
// console.log(newFun.next());
// console.log(newFun.next());
// console.log(newFun.next());

const user1 = {
    id: 1,
    name: 'Minh',
    city: 'HaNoi',
    country: 'Viet Nam'
};

delete user1.name;
console.log(user1);

// // for (var x of user1) {
// //     console.log(x)
// // }

// user1[Symbol.iterator] = function* () {
//     yield this.id
//     yield this.name
//     yield this.country
//     yield 'abc'
//     yield 'a'
// }
// console.log(...user1);

// user1[Symbol.iterator] = function () {
//     return this.id, this.name, this.city, this.country;
// }
// console.log(typeof user1);
// console.log(...user1);
// for (var x of user1) {
//     console.log(x)
// }

// for (var x in user1) {
//     console.log(user1[x]);
// }

// function* generator(index) {
//     while (index < 3) {
//         yield index++;
//     }
// }

// const genA = generator(0);
// console.log(genA.next());
// console.log(genA.next());
// console.log(genA.next());
// console.log(genA.next());

// function* g2() {
//     yield 3;
//     yield 4;
// }

// function* g1() {
//     yield* [1, 2];
//     yield* g2();
//     yield* '56';
//     yield* Array.from(arguments);
// }

// var iterator = g1(9, 10);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// //Array
// const arr1 = [1, 2, 3];
// // var brr = arr1;
// // var brr = [...arr1];
// // var brr = arr1.map(e => e);
// var brr = arr1.slice(0);
// brr[1] = 5;
// console.log(arr1);
// console.log(brr);

// var a = [1, 2, [3, 4]];

// let b = JSON.parse(JSON.stringify(a));
// // let b = a;
// b[2][0] = 5;
// console.log(a);
// console.log(b);
// var a = [1, 2, 3, 4];
// console.log(a.slice(-2));
let numbers = [0, 1, 2, 3, 1000, 20, 30];
numbers.sort();
console.log(numbers);
//[ 0, 1, 1000, 2, 20, 3, 30 ]

// var x = [1, 2];
// var y = [1, 7];
// console.log(x.concat(y));
// console.log(x.pop());
// console.log(x.push(3));
// console.log(x.includes(1));
// console.log(x.join('-'));
// console.log(x.reverse());

// const ar1 = [1, 2, 3];
// const ar2 = ar1.map(item => item * 2);
// console.log(ar2);

// const persons = [
//     { name: 'Peter', age: 16 },
//     { name: 'Mark', age: 18 },
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 14 },
//     { name: 'Tony', age: 24 },
// ];
// const fullAge = persons.filter(person => person.age >= 18);
// console.log(fullAge);

// const numbers = [4, 2, 5, 1, 3];
// numbers.sort(function (a, b) {
//     return a - b; // b - a
// });
// console.log(numbers);

// // Object
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName());

// function Person(firstName, lastName, age, eyeColor) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.eyeColor = eyeColor;
//     this.changeName = function (name) {
//         this.lastName = name;
//     };
// }
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");

// const employees = {
//     boss: 'Michael',
//     secretary: 'Pam',
//     sales: 'Jim',
//     accountant: 'Oscar'
// };

// const keys = Object.keys(employees);
// const values = Object.values(employees);
// console.log(keys);
// console.log(values);

// const user = {
//     username: 'AzureDiamond',
//     password: 'hunter2'
// };

// // Freeze the object
// // const newUser = Object.freeze(user);
// const newUser = Object.seal(user);

// newUser.password = '*******';
// newUser.active = true;

// console.log(newUser);


// let as = [1, 2, 3];
// console.log([1, ...as]);

// let obj = {
//     name: 'john',
//     age: 12
// };

// let obj1 = {
//     name: 'john',
//     age: 12
// };

// let obj2 = obj1;
// console.log(obj2 == obj1);
