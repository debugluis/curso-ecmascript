//flat
const array = [1, 2, [3, 4, [5, 6]]];
console.log(array);
console.log(array.flat(0));
console.log(array.flat(1));
console.log(array.flat(2));
console.log(array.flat(3));

//flat map
const array2 = [1, 2, 3, 4, 5, 6];
console.log(array2.flatMap(v => [v,v*2]));
