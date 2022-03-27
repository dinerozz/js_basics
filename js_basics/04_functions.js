// Функции
// 1.
//Function expression - нельзя сначала вызвать функцию, а потом ее объявить, нужно сначала объявить, затем обращаться к ней
// const greet2 = function greet2(name) {
//     console.log('Hello 2,', name)
// }
//
//
// greet('Lena')
// greet2('Lena')

// Function Declaration. Когда задаем через function declaration, то можем обращаться к ней когда захотим, даже объявляя ее после ее вызова
// function greet(name) {
//     console.log('Hello,', name)
// }

// console.log(typeof greet)
// console.log(typeof greet2)
// console.dir(greet)

// 2. Анонимные функции
// let counter = 0
// const interval = setInterval(function (){
//     if (counter === 5){
//         clearInterval(interval)
//     } else{
//         console.log(++counter)
//     }
// }, 1000)

// 3. Стрелочные функции
// function greet() {
//     console.log('Hello')
// }
//
//
// const arrow = (name, age) => {
//     console.log('Hello,', name, age)
// }
//
// // const arrow2 = name => console.log('Hello,', name)
//
// arrow('Vasya', 25)
//
// const pow2 = num =>{
//     return num ** 2
// }
// console.log(pow2(5))

// 4. Параметры по умолчанию
// const sum = (a = 40, b = a * 2) => a + b
// console.log(sum());
//
// // Оператор rest - ... позволяет принять любое количество значений
// function sumAll(...all) {
//     let sum = 0
//     for (let num of all) {
//         sum += num
//     }
//     return sum
// }
// const res = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9) // массив на выходе
// console.log(res)
//
// // 5. Замыкание
//
// function createMember(name) {
//     return function (lastName) {
//         console.log(name + lastName)
//     }
// }
//
// const logWithLastName = createMember('Vasya')
// console.log(logWithLastName('Pupkin'))
//
// // imediatly invoke function expression
//
// const iife = () => {
//     return 1;
// }
// console.log(iife)

// DRY - don't repeat yourself
//
// function sayHi() { // function declaration - можно вызывать до объявления
//     console.log('Hello, dear user')
// }
// sayHi()
//
// // function expression - нельзя вызывать до объявления
// const sampleFunc = function () {
//     console.log('Привет')
// }
// sampleFunc()
//
// const sayHello = () => console.log('hello')
// sayHello()

// Params & Arguments in functions

// const  sayHello = (userName) => {
//     console.log(userName)
// }
// sayHello('Hippo')
//
// // return
// //
// function sum(a, b) {
//     return a + b
// }
//
// function diff(a, b) {
//     return a - b
// }
//
// // let res = sum(2, 4)
// // console.log(res)
//
// // Колбэк-функция (или обратный вызов) - это функция, переданная в другую функцию в качестве аргумента, которая затем вызывается по завершению какого-либо действия.
//
// const doSomething = (func) => {
//     let x = 10;
//     let y = 15;
//     let result = func(x, y)
//     console.log(result)
//     return result
// }
// doSomething(sum) // 25
// doSomething(diff)

// IIFE - самовызывающаяся функция: immediately invoked function expression
// (function () {
//     console.log('hello')
// })() // - запускаем функцию сразу же
// () - создают выражение
// (function(a, b) {
//     console.log(a + b)
//     return a + b
// })(5, 6)

// arrow funcs

// const sumNum = (a, b) => {
//     let res = a + b
//     console.log(res)
//     return res
// }
//
// sumNum(5, 6)
//
// const sayHi = (firstName) => console.log(`Hello, ${firstName}`)
// sayHi('Murat')


// Тезис 1
// Для функций, объявленных через function f( ) { }, this вычисляется в момент вызова и равен объекту перед точкой. Если такого объекта нет — тогда this будет указывать на глобальный контекст (window)
//
// Тезис 2
// Для стрелочных функций this определяется в момент их создания и больше никогда не изменяется
