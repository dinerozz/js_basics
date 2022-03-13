// const firstName = 'Murat'; Типы данных
// const lastName = 'Artur';
// // let age = 19;
// const isProgrammer = true; // boolean
//
// const _private = 'private'
// const $ = 'some value'
//
// let currentYear = 2020
// const birthYear = 1993
//
// const age = currentYear - birthYear
// console.log(currentYear++);
// console.log(currentYear)
//
// let zxc;
// let dsd = null
//
// console.log(typeof currentYear)
// console.log(typeof isProgrammer)
// console.log(typeof zxc)
// console.log(typeof dsd)
// console.log(typeof null)


// 2. Приоритет операторов
// const fullAge = 26
// const birthYear = 2002
// const currentYear = 2022
//
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 3. Условные операторы

// const courseStatus = 'pending'
//
// if (courseStatus === 'ready') {
//    console.log('course status is ready')
// } else if (courseStatus === 'pending') {
//     console.log('course status is pending')
// } else {
//     console.log('There is no information')
// }


const isReady = true;
//
// if (!isReady) {
//     console.log(true)
// }else{
//     console.log(false)
// }

// isReady ? console.log(true) : console.log(false) // тернарный оператор

// 4. Строгое и не строгое сравнивание

// const num1 = 42 // num
// const num2 = '42' // string
// console.log(num1 == num2) // true
// console.log(num1 === num2) // false

// 5. Булевая логика

// && AND
// console.log(true && true) // true
// console.log(true && false) // false
// console.log(false && true) // false
// console.log(false && false) // false
// console.log(5 && 5) // 5
// console.log(5 && 4) // 4
// console.log(4 && 5) // 5
// console.log(4 && 4) // 4

// ||  OR
// console.log(true || true) // true
// console.log(true || false) // true
// console.log(false || true) // true
// console.log(false || false) // false

// ! - NOT
// console.log(true) // true
// console.log(!!true) // true
// console.log(!true) // false
// console.log(!false) // true
// console.log(!!false) // false
// console.log(false) // false

// console.log(5 && 4 || 3) // 4

// 8. Функции

// function calcAge (year) {
//     return 2022 - year
// }
// let myAge = calcAge(20)
// console.log(myAge)
//
// function logInfoAbout(name, year){
//     const age = calcAge(year)
//     console.log(name, age)
// }
// logInfoAbout("Vasya", 2002)

// 9. Массивы
const  cars = ['Мазда', 'Мерседес', 'Форд'] // так правильнее
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars)

// 10. Циклы
// for (let i = 0; i < cars.length ; i++) {
//     console.log(cars[i]);
// }

// for (let car of cars) {
//     console.log(car); // Мазда, Мерседес, Форд
// }
//
// for (let carsKey in cars) {
//     console.log(carsKey) // 0, 1, 2 - ключи(индексы)
// }
// cars.forEach((element) => {
//     console.log(element)
// })

// 11. Объекты
const person = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    age: 27,
    languages: ['Ru', 'En', 'De', 'Kz'],
    hasWife: false,
    greet: function () {
        console.log('greet from person')
    }
}

console.log('First Name: ' + person.firstName + '\nLast Name: '
    + person.lastName + '\nAge: ' + person.age + '\nLanguages: '
    + person.languages + '\nHas wife: ' + person.hasWife) // вывод полей объекта(ключей)
person.greet()

console.log('-----------------------------------')
person.isProgrammer = true
console.log(person["firstName"])
const key = 'languages'
console.log(person[key])

console.log('-----------------------------------')
console.log(person) // вывод самого объекта

