const cars = ['Audi', 'BMW', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
// }
// console.log('=======')
// for (const car of cars) {
//     console.log(car)
// }
// console.log('=======')
// for (const carsKey in cars) {
//     console.log(carsKey)
// }
// let i = 0
// while (i < cars.length) {
//     console.log(cars[i])
//     i++
// }

// do {
//     console.log(cars[i])
//     i++
// } while (i < cars.length)

// method forEach
cars.forEach(() => {

})
cars.forEach((item, index) => console.log(index, item))

console.log('==========')

const printCar = ((item, index) => {
    console.log(index, item)
})

cars.forEach(printCar) // using callback function

// METHOD MAP
//Метод «arr.map(callback[, thisArg])» используется для трансформации массива.
// Он создаёт новый массив, который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента arr.

let carLength = cars.map((car, idx) => {
    return car.length
})
console.log(carLength)

const numbers = [1, 4, 9, 16, 25]
const roots = numbers.map(Math.sqrt) // создаем новый массив куда через мап закидываем трансформированные элементы массива
console.log(roots) // 1, 2, 3, 4, 5

let carsDouble = cars.map((cars) => cars.length)
console.log(carsDouble)

let carsUpper = cars.map(cars => cars.toUpperCase())
carsUpper.forEach(item => {
    console.log(item)
})
