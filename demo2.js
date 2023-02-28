//closure
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

var msg = 'minh';
function showMessage() {
    var msg = 'tuan';
    return function () {
        var msg = 'nguyen';
        console.log(msg);
    }
}
var func = showMessage();
func();

//Currying function
const curries = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
console.log(curries(2)(3)(5));

//EventEmitter
var events = require('events');
var eventEmitter = new events.EventEmitter();

function listen(params) {
    console.log(params);
}

eventEmitter.on('action', listen);

eventEmitter.emit('action', 'Minh');

//Callback
function myFunction(params) {
    if (typeof params === 'function')
        params("NTM");
}

// function callbackFunc(name) {
//     console.log('name:', name);
// }

// myFunction(callbackFunc);

myFunction((name) => {
    console.log('name:', name);
})