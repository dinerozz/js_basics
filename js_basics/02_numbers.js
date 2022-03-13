// Number
// const num = 42 // int
// const num2 = 42.5 // float
// const pow = 10e3 // 10 ^ 3 степени
// console.log(num2)
// console.log(pow)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER )
// console.log(Number.EPSILON)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// console.log('1 /0', 1 / 0)
// console.log(Number.NaN) // not a number
// console.log(typeof NaN) // number
// const weird = 2 / undefined // NaN
// console.log(Number.isNaN(weird))  // true
// console.log(Number.isFinite(42)) // true
// console.log(Number.isFinite(Infinity)) // false
//
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(stringInt + 2) // 402
// console.log(Number.parseInt(stringInt) + 2) // 42
// console.log(parseInt(stringInt) + 2) // 42
// console.log(Number(stringInt) + 2) //42
// console.log(+stringInt + 2) // 42
//
// console.log(parseInt(stringFloat) + 2) // 42 // int
// console.log(parseFloat(stringFloat) + 2) // 42.42

// console.log(0.4 + 0.2) // 0.6000000000000000000001
// console.log((2 / 5) + (1 / 5))  // 0.6000000000000000000001
// console.log(+(0.4 + 0.2).toFixed(1)) // 0.6
// console.log(parseFloat((0.4 + 0.2).toFixed(1))) // 0.6
//
// console.log(Math.floor(5.7))
// console.log(Math.ceil(5.7))

// BigInt
// console.log(90071992547409919999999n - 9007199254740991999999n) // bigInt
// console.log(-90071992547409919999999n) // negative bigInt

// console.log(10n - 4) // error
// console.log(parseInt(10n) - 4) // 6
// console.log(10n - BigInt(4)) // 6n
// console.log(5n / 2n) // 2n

// Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25)) // 5
// console.log(Math.pow(5, 3)) // 125
// console.log(Math.abs(-42)) // 42
// console.log(Math.max(42, 12, 23, 11, 422)) // 422
// console.log(Math.min(42, 12, 23, 11, 422)) // 11
// console.log(Math.floor(5.5)) // 5
// console.log(Math.floor(5.9)) // 5
// console.log(Math.ceil(5.2)) // 6
// console.log(Math.round(4.5)) // 5
// console.log(Math.trunc(4.9999)) // 4
console.log(Math.random())
console.log(Math.round(Math.random() * 10))

//Example
function getRandomBetween(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

console.log(getRandomBetween(1, 10));
