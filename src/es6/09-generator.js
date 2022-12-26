function* iterate(array) {
    for(let value of array) {
        yield value;
    }
}

const it = iterate(['luis', 'sindy', 'alfredo', 'iris', 'jose'])

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);