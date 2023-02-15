function Dog(name) {
    this.name = name;
    this.stomach = [];
}

Dog.prototype.eat = function () {
    this.stomach.push("cat");
}

module.exports = Dog;

function groupByName(arr) {
    let result = [];
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].name;
        let count = arr[i].count;

        if (!map.has(name)) {
            map.set(name, { name: name, count: 0 });
            result.push(map.get(name));
        }
        map.get(name).count += count;
    }

    return result;
}

let arr = groupByName(e);

console.log(arr + "\r\n");