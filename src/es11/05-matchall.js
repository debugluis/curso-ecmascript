const regex = /\b(Apple)+\b/g

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc."

let a;

for (const match of fruit.matchAll(regex)) {
    console.log({match});
    a=match;
}