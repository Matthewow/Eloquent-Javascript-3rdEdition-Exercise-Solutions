const flattening = (arr) => {
    return arr.reduce((a, b) => a.concat(b));
}

// It takes a value, a test function, an update function, and a body function.
// w/ using loop
// const loop = (value, testFunc, updateFunc, f) => {
//     if(!testFunc(value)) return
//     f(value)
//     value = updateFunc(value)
//     loop(value, updateFunc, testFunc, f)
// }

function loop(value, test, update, body) {
    for (let n = value; test(n); n = update(n)) {
        body(n);
    }
}

// loop(3, n => n > 0, n => n - 1, console.log);

function every(array, test) {
    return array.reduce((accumulator, currentValue) => {
        return accumulator && test(currentValue)
    }, true)

    // or De Morgan’s laws, a && b equals !(!a || !b)
    // return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true