// Bài 1:
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

// Bài 2:
let c = [];
b.forEach((m) => {
    let exist = c.find((item) => {
        return item === m.name;
    });
    if (!exist) c.push(m.name);
});

console.log(c);
// Bài 3:
let res = 0;
let d = new Array(100).fill(0).map((m, i) => {
    return res += (m + i) % 5 == 0 ? m + i : 0, m + i, i++;
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