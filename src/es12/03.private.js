class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    speak() {
        return 'hello';
    }
    greetings() {
        return `${this.speak()} ${this.name}`;
    }
    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const mrluisperez = new user('Luis', 15);
console.log(mrluisperez.greetings());
console.log(mrluisperez.uAge);
console.log(mrluisperez.uAge = 32);