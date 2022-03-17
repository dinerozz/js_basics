// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         console.log(arr[i][j])
//     }
// }
// 'use strict'
// console.log(this)

// let arr = [1, 2, 3]
// let obj = {a: 1, b: 2}
// console.log(typeof arr) // object
// console.log(typeof obj) //object
// console.log(Array.isArray(arr)) //true
// console.log(Array.isArray(obj)) //false
// console.log(typeof null) // object
// console.log(typeof undefined) // undefined (data type)
// &&  ||

// console.log(2 && 3) // 3 // возвращает последний истинный или первый ложный
// console.log(2 || 3) // 2, ИЛИ - возвращает первый истинный операнд
// console.log((2 && 3) || 5) // 3
// console.log(5 && 2 || 3) // 2
// console.log((2 || 3) && 5) // 5

// function funcDeclaration () {
//     return 0
// }
//
// let funcExpression = function () {
//     return 0
// }

// 5. Замыкание

// function createMember(name) {
//     return function (lastName) {
//         console.log(name + lastName)
//     }
// }
//
// const logWithLastName = createMember('Vasya')
// console.log(logWithLastName('Pupkin'))

// (function () {
//     statements //IIFE (Immediately Invoked Function Expression) это JavaScript функция, которая выполняется сразу же после того, как она была определена.
// })();
//
//     (function () {
//         console.log('hello') // IIFE
//     })();

// array = [1, 2, 3, 4, 5]
//
// const duplicate = arr => {
//     return [...arr, ...arr]
// }
// console.log(duplicate([1,2,3,4,5]))
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

function compare(a,b){
    return a - b
}
// let wordsArr = ['Азбука', 'Блокада', 'Винегрет', 'Яблоко', 'Груша']
// let arr = [5, 2, 3, 1, 4]
//
console.log(arr.sort(compare));
// console.log(wordsArr.sort());
// console.log(typeof NaN)
// console.log(arr.sort())
