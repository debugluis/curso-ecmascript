function square (num) {
    console.log(num*num);
    return num*num;
}
square(2);

const square = (num) => {
    console.log(num*num);
    return num*num;
}
square(2);

const square = num => num * num;
console.log(square(2));