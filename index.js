// Bài 1: Sắp xếp mảng sau theo thứ tự độ tuổi giảm dần
// [
//   { name: 'name1', age: 12 },
//   { name: 'name2', age: 20 },
//   { name: 'name3', age: 15 },
//   { name: 'name4', age: 10 },
//   { name: 'name4', age: 27 }
// ]

const a = [
  { name: 'name1', age: 12 },
  { name: 'name2', age: 20 },
  { name: 'name3', age: 15 },
  { name: 'name4', age: 10 },
  { name: 'name4', age: 27 }
];

let b = a.sort((a, b) => {
  return a.age - b.age;
});

console.log(b);

// Bài 2: Viết code chuyển mảng đã sắp xếp ở bài 1 thành mảng tên
// VD: [‘name4’, ‘name2’, ‘name3’]
let c = b.map((m) => {
  return m.name;
})

console.log(c);
// Bài 3: Tạo 1 mảng có 100 phần tử toàn bộ là số 0, 
// chuyển mảng vừa tạo thành mảng mới có giá trị từ 0->99, lọc ra những số chia hết cho 5 rồi tính tổng những số còn lại
let d = new Array(100).fill(0).map((m, i) => {
  return m + i, i++;
});
let res = 0;
d.map((m) => {
  res += (m % 5 == 0) ? m : 0;
});
console.log(res);

// Bài 4
let e = [
  { name: 'name1', count: 13 },
  { name: 'name3', count: 23 },
  { name: 'name1', count: 25 },
  { name: 'name2', count: 27 },
  { name: 'name3', count: 30 },
  { name: 'name2', count: 20 }
];

// function groupByName(arr) {
//   let result = [];
//   let map = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     let name = arr[i].name;
//     let count = arr[i].count;

//     if (!map.has(name)) {
//       map.set(name, { name: name, count: 0 });
//       result.push(map.get(name));
//     }
//     map.get(name).count += count;
//   }

//   return result;
// }

// let arr = groupByName(e);

// console.log(arr);

let arr = [];

e.forEach((item) => {
  let existingItem = arr.find((outputItem) => {
    return outputItem.name === item.name;
  });

  if (existingItem) {
    existingItem.count += item.count;
  } else {
    arr.push(item);
  }
});

console.log(arr);
var Dog = require('./Dog')
function Cat(name) {
  this.name = name;
  this.die = false;
  this.stomach = [];
}

Cat.prototype.eat = function (animal) {
  this.die = true;
  if (animal instanceof Dog) {
    this.stomach.push(animal);
  } else {
    throw new Error('Cat can eat mouse');
  }
}

let dog = new Dog("bull");
let cat = new Cat("cat");
cat.eat(dog);
console.log(cat);
