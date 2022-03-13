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
const sum = (a = 40, b = a * 2) => a + b
console.log(sum());

// Оператор rest - ... позволяет принять любое количество значений
function sumAll(...all) {
    let sum = 0
    for (let num of all) {
        sum += num
    }
    return sum
}
const res = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9) // массив на выходе
console.log(res)

// 5. Замыкание

function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Vasya')
console.log(logWithLastName('Pupkin'))