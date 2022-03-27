// const person = {
//     firstName: 'Sasha',
//     age: 19,
//     isMarried: false,
//     sayHi: function (name) {
//         console.log(this)
//         console.log(`Hello ${name}, my name is ${this.firstName}, i'm ${this.age} years old`) // this - в данном случае это объект person
//     }
// }
// Опишем класс для всех будущих объектов person, которые будут создаваться на его основе

class Person {
    constructor (firstName, age, isMarried) { // создаем конструктор с полями firstName, age, isMarried
        this.firstName = firstName
        this.age = age
        this.isMarried = isMarried
    }
    sayHi(name) { // описываем метод sayHi() - общий для всех экземпляров класса Person
        console.log(`Hello ${name}, my name is ${this.firstName}, i'm ${this.age} years old`) // this - в данном случае это наш объект
    }
}

const person1 = new Person('Vasya', 22, true) // Создаем экземпляр класса Person - person1, т.е. запускается конструктор и принимает аргументы-заполняет ими поля
const person2 = new Person('Sasha', 21, false)

console.log(person1)
console.log(person2)

person1.sayHi('Pavel')
person2.sayHi('Artur')

// let {firstName, age} = person1 // деструктуризация объекта
// console.log(firstName)
// console.log(age)