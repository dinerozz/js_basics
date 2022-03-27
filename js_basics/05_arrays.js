const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13, 21, 34]
// const people = [
//     {name: 'Murat', budget: 4200},
//     {name: 'Artur', budget: 3500},
//     {name: 'Palezha', budget: 2100},
// ]
// console.log(cars)
// for (let car of cars) {
//     console.log(car)
// }

// =====ARRAYS========
// ==========METHODS:
// arr.push() - Добавляет элемент в конец массива
// arr.pop() - Удаляет элемент из конца массива
// arr.shift() - Удалить элемент из начала массива
// arr.unshift(...items) - Добавить элементы в начало массива
// arr.splice([start], [deleteCount, newElements]) - Удалить элемент/несколько элементов из массива
// arr.slice(), - Позволяет вырезать часть массива и возвращать его
// arr.forEach()
// arr.indexOf(),
// arr.includes() ...

// Когда мы записываем массивы и объекты в переменные,
// наша переменная ссылается на этот массив/объект в области памяти
const autoBrands = ['Audi', 'BMW', 'Mercedes', 'VW', 'Porsche', 'Toyota'] // коллекция
// console.log('Length: ' + autoBrands.length)
// let array2 = ['Audi', 'BMW', 'Mercedes', 'VW', 'Porsche', 'Toyota']
// array2 !== autoBrands, т.к. array2 - это новый массив

// autoBrands.push('Nissan') // Добавляем Nissan в конец массива
// console.log(autoBrands)
// autoBrands.splice(3, 5, 'KIA', 'HYUNDAI') // удаляет/заменяет элемент/элементы массива начиная с n позиции, k элементов
// console.log(autoBrands)

//forEach method
// autoBrands.forEach(e => {
//     console.log(e)
// })



// Function
// function addItemToEnd(){
//
// }
// Method
// cars.push('VAG') // вставить в конец
// console.log(cars)
// cars.unshift('Lada') // вставить в начало
// console.log(cars)
// const firstItem = cars.shift() // удаляет и возвращает первый элемент
// const lastCar = cars.pop() // удаляет и возвращает последний элемент массива
// console.log(firstItem);
// console.log(lastCar);
// console.log(cars)

// console.log(cars.reverse()) // реверсит массив задом наперед
// console.log(cars)

// замена элемента массива по индексу
// const index = cars.indexOf('БМВ')
// cars[index] = 'Porsche'
// console.log(cars)


// Поиск в массиве через цикл
// let findedPerson
// for (const person of people) {
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

// Поиск в массиве объектов

// const index = people.findIndex(function (person){
//     // console.log(person)
//     return person.budget === 3500
// })
// const person = people.find(function (person){
//     return person.budget === 3500
// })
// console.log(people[index])

// const person = people.find((person) => {
//     return person.budget === 3500
// })
// console.log(person)

// console.log(cars.includes('Мазда')); // true

// Перевод массива в верхний регистр с помощью метода map. Метод map возвращает НОВЫЙ МАССИВ
// const upperCaseCars = cars.map((car) => {
//     return car.toUpperCase()
// })
// console.log(upperCaseCars)
// console.log(cars)
//
// const pow2Fib = fib.map(num => num ** 2)
// console.log(pow2Fib)

// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => { // фильтруем
//     return num > 20
// })
// console.log(pow2Fib)
// console.log(filteredNumbers )



// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('') // split - разбивает строку на массив строк по заданному разделителю, join - преобразовывает массив в строку через символ
// console.log(reverseText)

// const people = [
//     {name: 'Murat', budget: 4200},
//     {name: 'Artur', budget: 3500},
//     {name: 'Palezha', budget: 2100},
// ]
// Reduce
// const allBudget = people
//     .filter(person => person.budget > 2100)
//     .reduce((acc, person) => {
//     acc += person.budget
//     return acc
// }, 0)
// console.log(allBudget)