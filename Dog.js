function Dog(name) {
    this.name = name;
    this.stomach = [];
}

Dog.prototype.eat = function () {
    this.stomach.push("cat");
}
