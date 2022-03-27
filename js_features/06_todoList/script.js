const todoForm = document.querySelector('.todo-form')
const todoList = document.querySelector('.todo-list')
const taskInput = document.querySelector('.task__input')
const deleteAllBtn = document.querySelector('.deleteAll-btn')

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const createTask = (text) => {
    const newTask = document.createElement('li')
    newTask.textContent = text
    todoList.appendChild(newTask)
    const inputText = taskInput.value
    const deleteBtn = document.createElement('button')
    const checkBtn = document.createElement('button')

    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerHTML = `<i class="fa-solid fa-delete-left"></i>`
    deleteBtn.addEventListener('click', function () {
        this.closest('li').remove()
    })

    checkBtn.classList.add('check-btn')
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    checkBtn.addEventListener('click', function () {
        this.closest('li').classList.toggle('finished__task')
    })

    newTask.append(deleteBtn)
    newTask.append(checkBtn)
}

todoForm.addEventListener('submit', function (e) {
    e.preventDefault()
    itemsArray.push(taskInput.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    createTask(taskInput.value)
    taskInput.value = ''
    taskInput.focus()
})

data.forEach(item => {
    createTask(item) // с каждой итерацией закидываем в массив data новый элемент
})

deleteAllBtn.addEventListener('click', function() { // очищаем локальное хранилище, удаляем все элементы списка разом
    localStorage.clear()
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild)
    }
})


