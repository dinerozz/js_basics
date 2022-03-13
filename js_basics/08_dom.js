// DOM
// window - объект относящийся к браузеру

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('heading2')[0]
// const heading2 = document.querySelector('.heading2')
// const heading2 = document.querySelector('#subhello') // Всегда 1 элемент (первый попавшийся)
const heading2 = document.querySelector('h2')
console.log(heading2)
// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
console.log(h2List)
// const heading3 = h2List[1]
const heading3 = h2List[h2List.length - 1]
console.log(heading3)
// console.log(heading)
// console.dir(heading.textContent)


setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 1500)

setTimeout(() => {
    addStylesTo(link, 'Практикуйся', 'blue')
}, 3000)

const link = heading2.querySelector('a')

setTimeout(() => {
    addStylesTo(heading3, 'И все получится', 'yellow', '2rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
    if (text) {
        node.textContent = text
    }
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.transition = '0.3s ease all'
    // falsy: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}


heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'orange'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'blue') {
        heading2.style.color = 'orange'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'blue'
        heading2.style.backgroundColor = '#000'
    }
})