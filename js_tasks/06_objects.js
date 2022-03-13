// Objects

const person = {
    name: 'Murat',
    age: 20,
    isProgrammer: true,
    languages: ['ru', 'en', 'kz'],
    // 'complex key': 'Complex value',
    // ['key_' + (1 + 3)]: 'Computed key', // key_4
    greet() {
        console.log('greet from person') // метод greet
    },
    info() {
        console.log('this: ', this)
        console.info('Информация про человека по имени:', this.name) // this внутри функции является person
    }
}
// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
// console.log(person)
// person.greet()
//
// person.age++
// person.languages.push('by')
// console.log(person)
// // person['key_4'] = undefined
// delete person['key_4'] // удаление ключа
// console.log(person)

// Деструктуризация

// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age: personAge = 10, languages} = person
//
// console.log(name, personAge, languages)

// Итерирование по объекту, вывод ключей и значений
// For in опасен. Он бежит не только по ключам объекта, но он также может заходить в его прототип. Из-за этого
// могут возникать проблемы. В связи с этим нужно ставить проверку на hasOwnProperty

// console.log(person)
// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('key: ', key)
//         console.log('value: ', person[key])
//     }
// }
//
// const keys = Object.keys(person) // object.keys не бежит по прототипам, поэтому hasOwnProperty не нужен
// console.log(keys) // получаем массив из ключей объекта person
// keys.forEach((key) => {
//     console.log('key: ', key)
//     console.log('value: ', person[key])
// })

// Context

// person.info()
// Метод bind, контекст this, изменение контекста с помощью метода bind
const logger = {
    keys(obj) {
        console.log('Object Keys: ', Object.keys(this))
    },
    keysAndValues() {
        const keys = Object.keys(this)
        keys.forEach((key) => {
            console.log(key, this[key])
        })
        // const self = this
        // Object.keys(this).forEach( function (key){
        //     console.log(key, this[key])
        // }.bind(this))
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('----------- Start ------------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(key, this[key])
            if (between && index !== array.length - 1) {
                console.log('--------------------------')
            }
        })
        if (bottom) {
            console.log('----------- End ------------')
        }
    }
}

// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person) // Метод call - делает то же самое, что и bind, но только bind - возвращает новую функцию, а call сразу ее вызывает
// logger.keysAndValues.call(person)
// logger.withParams.call(person, true, true, true) // метод call может принимать неограниченное кол-во параметров (т.е. зависит от самой функции)
logger.withParams.apply(person, [true, true, true]) // apply то же самое, что и call, но отличие в том, что всегда принимает в себя 2 параметра. Второй параметр - массив